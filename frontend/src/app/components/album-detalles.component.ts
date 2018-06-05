import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {Album} from '../models/album';
import {Cancion} from '../models/cancion';
import {AlbumService} from '../services/album.service';
import {CancionService} from '../services/cancion.service';
import {IdentidadService} from '../services/identidad.service';
import {ColaService} from '../services/cola.service';
import {PlaylistService} from '../services/playlist.service';
import {Playlist} from '../models/playlist'
import { NotifierService } from 'angular-notifier';

declare var $ :any;
@Component({
  selector: 'album-detalles',
  templateUrl:'../views/album-detalles.html',
  providers:[UserService,ArtistService,AlbumService,CancionService,PlaylistService]
})



export class AlbumDetallesComponent implements OnInit{

  public titulo_apartado;
  public album:Album;
  public identidad;
  public token;
  public url:string;
  public alerterror:string;
  public es_editar;
  public mensajerecibido;
  public mensajeerror;
  public artista:Artista;
  public canciones:Cancion[];
  public cola:Cancion[];
  public playlists:Playlist[];

  public cancion:Cancion;

  private readonly notifier: NotifierService;


  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    private _albumService:AlbumService,
    private _cancionService:CancionService,
    public  _identidadService:IdentidadService,
    public _colaService:ColaService,
    public _playlistService:PlaylistService,
    notifierService: NotifierService
  ){
    this.titulo_apartado = "Detalles album";
    console.log("titulo",this.titulo_apartado);
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.album = new Album('','','','', null,'');
    this.es_editar = true;

    this.identidad = this._identidadService.identidad;

    this._colaService = _colaService;    

    this.notifier = notifierService;

  }

  ngOnInit(){

    console.log("Album editar cargado");

    //Obtenemos el album del servicio
    this.getAlbum();
   

   
  }

  public getAlbum(){
      console.log("getalbum");

      this._route.params.forEach((params:Params)=>{

        let id = params['id'];

        this._albumService.getAlbum(this.token,id).subscribe(
          response =>{
              let result : any = response;
              console.log("getalbum result",result);
            if(!result.album_buscado){
                
              this._router.navigate(['/']);
          }

          else{
              //Obtenemos el album
           this.album = result.album_buscado;
           this.artista = result.album_buscado.Artistum;

           console.log("artista del album",this.artista);

           //Obtenemos el listado de canciones del album
           this._cancionService.getCanciones(this.token,id).subscribe(
             response =>{
               let result:any = response;
              console.log("getcanciones response",result.canciones_buscadas);
              this.canciones = result.canciones_buscadas;
             },
             error=>{
               console.log(error);
             }
           );

          }  
          },
          error =>{
            this._router.navigate(['/']);
          }
        )
      });
  }

  getIdentidadPorToken(){
    this._userService.getIdentidadConToken().subscribe(
     response =>{
       let result:any = response;
      this.identidad = result.usuario;
      console.log("This.identidad", result.usuario);

     },
     error =>{
       //Error
       this.identidad = null;
       //Cerramos sesión
      // this.logout();
     }
   );
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
                this.getAlbum();
              }
              
          },
          error=>{

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
    let path_imagen_album = this.url + '/obtener-foto-album/' + this.album.imagen;

    localStorage.setItem('cancion_reproduciendo',cancion_reproductor);

    document.getElementById("mp3-source").setAttribute("src",path_archivo);
    (document.getElementById("reproductor-sonoro") as any).load();
    (document.getElementById("reproductor-sonoro") as any).play();

    this._colaService.establecerCancion(cancion)
    this._colaService.setArtistaSonando(this.artista)
    this._colaService.setAlbumSonando(this.album)
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


  
  playlistsModal(cancion)
  {
    this.cancion = cancion
    this.getPlaylistsCreadas();
    $('#modalPlaylists').appendTo("body").modal('show');
  }


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
        this.notifier.notify( 'success', 'SE HA AÑADIDO CORRECTAMENTE' );
        $('#modalPlaylists').appendTo("body").modal('hide');
      },

      error =>{
        console.log(error)
        this.notifier.notify( 'error', 'HA HABIDO UN ERROR, PUEDE SER QUE ESTÉ AÑADIDA' );
        $('#modalPlaylists').appendTo("body").modal('hide');
      }
    )
   }

   addCancionCola(cancion){
     this._colaService.addCancionCola(cancion)
   }

}