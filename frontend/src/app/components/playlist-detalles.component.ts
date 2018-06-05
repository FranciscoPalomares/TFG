import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Playlist} from '../models/playlist';
import {ArtistService} from '../services/artista.service';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';

import {PlaylistService} from '../services/playlist.service';
import {Cancion} from '../models/cancion';
import {Usuario} from '../models/usuario';
import {ColaService} from '../services/cola.service';
import {CancionService} from '../services/cancion.service';
declare var $ :any;

@Component({
  selector: 'playlist-detalles',
  templateUrl:'../views/playlist-detalles.html',
  providers:[UserService,PlaylistService,CancionService]
})


export class PlaylistDetalleComponent implements OnInit{

  public titulo_apartado: string;
  public identidad;
  public token;
  public url:string;
  public canciones:Cancion[];
    public playlist:Playlist;
    public cola:Cancion[];

   public usuario:Usuario;


  public id_playlist;

   public laSigo:boolean;
    public nombre_playlist:String;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _playlistService:PlaylistService,
    public _colaService:ColaService,
    private _cancionService:CancionService
  ){
    this.titulo_apartado = "";
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.playlist = new Playlist("","")
    this._colaService = _colaService;   
   
    this.identidad = this._identidadService.identidad;  
    this.laSigo=null;  
  }

  ngOnInit(){
    console.log("Playlist detalles cargado");
    this.getPlaylist();
   
  }

  getPlaylist(){

    this._route.params.forEach((params:Params)=>
    {
        let id = params['id'];
        this.id_playlist = id;
        console.log("id playlist",id);

        this._playlistService.obtenerAlbum(this.token,id).subscribe(
          response =>{
            console.log(response)
            let resultado:any = response;

            this.playlist.nombre  =resultado.playlist_buscado.nombre;
            this.playlist.id  =resultado.playlist_buscado.id;

            this.canciones = resultado.playlist_buscado.canciones;
            this.usuario = resultado.playlist_buscado.Usuario;


             console.log("usuario id",this.usuario.id)
             console.log("identidad id",this.identidad.id)
            if(this.usuario.id != this.identidad.id){
              this.verSeguida();
            }



          },
          error =>{
            console.log(error)
            this._router.navigate(['/']);
          }
        )

    });


  }



  eliminarPlaylist(){
    
    var r = confirm("¿De verdad quieres eliminar esta playlist?");
    if (r == true) {
       this._playlistService.borrarPlaylist(this.token,this.playlist).subscribe(
          response =>{
              let resultado:any = response;
              console.log(resultado);
              this._router.navigate(['/playlists']);
          },
          error=>{
            console.log(error)
          }
       );
    } 
  }


  reproducirCancion(cancion){


    this.administrarColaCanciones(cancion);

    console.log("cola",this.cola);

    this._colaService.establecerCancion(cancion);

    let cancion_reproductor = JSON.stringify(cancion);
    let path_archivo = this.url + '/obtener-fichero-cancion/' + cancion.archivo;
    //let path_imagen_album = this.url + '/obtener-foto-album/' + this.album.imagen;

    localStorage.setItem('cancion_reproduciendo',cancion_reproductor);

    document.getElementById("mp3-source").setAttribute("src",path_archivo);
    (document.getElementById("reproductor-sonoro") as any).load();
    (document.getElementById("reproductor-sonoro") as any).play();

    this._colaService.obtenerAlbumArtista(cancion.id)

    //document.getElementById("titulo-cancion-reproductor").innerHTML = cancion.nombre;
    //document.getElementById("artista-reproductor").innerHTML = " - "+ this.artista.nombre;
    //document.getElementById("reproductor-imagen-album").setAttribute("src",path_imagen_album);
  }

  administrarColaCanciones(cancion){

    this.cola = Object.assign([], this.canciones);

    for(var i=0; i < this.cola.length; i++) {
      if(this.cola[i].id ==cancion.id)
      {
        this.cola.splice(i,1);
        break; 
      }
    }

    this._colaService.establecerCola(this.cola);

  }

  compararCancion(id){

    if(!this._colaService.cancion_sonando)
    return false;
    
    else
    return id == this._colaService.cancion_sonando.id ;
  }


  verSeguida(){

    this._route.params.forEach((params:Params)=>
    {
        let id = params['id'];

        console.log("id playlist",id);

        this._playlistService.verSeguida(this.token,id).subscribe(
          response =>{
            console.log("LASIGO",response);
            this.laSigo = true;
          },
          error =>{
            console.log(error)
            this.laSigo = false;
          }
        )

    });
  }

  seguirPlaylist(){


    this._playlistService.seguirPlaylist(this.token,this.id_playlist).subscribe(

      response =>{
        this.laSigo=true;
      }
    )

  }

  dejarSeguirPlaylist(){
    this._playlistService.dejarSeguirPlaylist(this.token,this.id_playlist).subscribe(

      response =>{
        this.laSigo=false;
      },
      error=>{
        console.log(error)
      }
    )
  }

  addCancionCola(cancion){
    this._colaService.addCancionCola(cancion)
  }

  public cancion:Cancion;

  playlistsModal(cancion)
  {
    this.cancion = cancion
    this.getPlaylistsCreadas();
    $('#modalPlaylists').appendTo("body").modal('show');
  }


  public playlists:Playlist[];
  getPlaylistsCreadas(){

    this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(
      response =>{
       
       let resultado:any = response;
       this.playlists =resultado.playlists_buscados;
       console.log("playlists",this.playlists)
      },
      error=>{
       console.log(error)
      }  
    )  
 
 
   }

   addCancionPlaylist(playlist){

    this._playlistService.addCancionPlaylist(this.token,this.cancion,playlist).subscribe(
      response =>{
        console.log(response)
        //this.notifier.notify( 'success', 'SE HA AÑADIDO CORRECTAMENTE' );
        $('#modalPlaylists').appendTo("body").modal('hide');
      },

      error =>{
        console.log(error)
        //this.notifier.notify( 'error', 'HA HABIDO UN ERROR, PUEDE SER QUE ESTÉ AÑADIDA' );
        $('#modalPlaylists').appendTo("body").modal('hide');
      }
    )
   }

   eliminarCancion(id){
    var r = confirm("¿De verdad quieres eliminar esta canción?");
    if (r == true) {
       this._cancionService.borrarCancion(this.token,id).subscribe(
          response =>{
              let result:any = response;
              console.log("boarrar",result);
              if(!result.cancion_eliminado){
                alert("Error al borrar cancion");
              }
              else{
                this.getPlaylist();
              }
              
          },
          error=>{

          }
       );
    } 
  }
 
}