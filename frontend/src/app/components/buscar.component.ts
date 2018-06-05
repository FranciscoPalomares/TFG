import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Playlist} from '../models/playlist';
import {Album} from '../models/album';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';
import {CancionService} from '../services/cancion.service';
import {PlaylistService} from '../services/playlist.service';

import {Cancion} from '../models/cancion';
import {Usuario} from '../models/usuario';
import { NotifierService } from 'angular-notifier';
import {ColaService} from '../services/cola.service';
declare var $ :any;
@Component({
  selector: 'buscador',
  templateUrl:'../views/buscar.html',
  providers:[UserService,PlaylistService,AlbumService,CancionService,ArtistService]
})

export class BuscarComponent implements OnInit{

  public identidad;
  public token;
  public url:string;
  public canciones:Cancion[];
    public playlists:Playlist[];
    public albumes:Album[];
    public artistas:Artista[];

   public usuario:Usuario;
    public cancion:Cancion;


    public usuarios_buscados:Usuario[];

    private readonly notifier: NotifierService;

    public cola:Cancion[];

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _playlistService:PlaylistService,
    private _albumService:AlbumService,
    private _cancionService:CancionService,
    private _artistaService:ArtistService,
    notifierService: NotifierService,
    public _colaService:ColaService
  ){
 
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   
    this.identidad = this._identidadService.identidad;   
    
    this.notifier = notifierService;
  }

  ngOnInit(){
    console.log("Playlist add cargado");
  }

  onKey(value: string){
      this._albumService.filtrarAlbumes(this.token,value).subscribe(
          response => {
              let resultado:any  = response;
              console.log(response)
              this.albumes = resultado.albumes_buscados;
          }
      )

      this._playlistService.filtrarPlaylists(this.token,value).subscribe(
          response =>{
              let resultado:any = response;
              this.playlists = resultado.playlists_buscados;
          }          
      )

      this._cancionService.filtrarCanciones(this.token,value).subscribe(
          response =>{
              let resultado:any = response;
              this.canciones = resultado.canciones_buscados;
              console.log("canciones buscadas",this.canciones)

          }
      )

      this._artistaService.filtrarPlaylists(this.token,value).subscribe(
          response =>{
              let resultado :any = response;
              this.artistas = resultado.artistas_buscados;

          }
      )


      this._userService.filtrarUsuarios(this.token,value).subscribe(
        response =>{
          let resultado:any = response;
          this.usuarios_buscados = resultado.usuarios_buscados;
        }
      )
  }

  playlistsModal(cancion)
  {
    this.cancion = cancion
    this.getPlaylistsCreadas();
    $('#modalPlaylists').appendTo("body").modal('show');
  }

  public playlists_creadas: Playlist[];
  getPlaylistsCreadas(){

    this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(
      response =>{
       
       let resultado:any = response;
       this.playlists_creadas =resultado.playlists_buscados;
       
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
    //(document.getElementById("reproductor-sonoro") as any).play();


    var playPromise = (document.getElementById("reproductor-sonoro") as any).play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }

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
}