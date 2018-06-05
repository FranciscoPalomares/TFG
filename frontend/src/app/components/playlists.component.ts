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
@Component({
  selector: 'playlist-detalles',
  templateUrl:'../views/playlists.html',
  providers:[UserService,PlaylistService]
})

export class PlaylistsComponent implements OnInit{

  public titulo_apartado: string;
  public identidad;
  public token;
  public url:string;
  public canciones:Cancion[];
    public playlists:Playlist[];
    public playlists_seguidas:Playlist[];

   public usuario:Usuario;

    public nombre_playlist:String;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _playlistService:PlaylistService
  ){
    this.titulo_apartado = "";
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
   
    this.identidad = this._identidadService.identidad;    
  }

  ngOnInit(){
    console.log("Playlist add cargado");
    this.getPlaylistsCreadas();
    this.getPlaylistsSeguidas();
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

  getPlaylistsSeguidas(){

    this._playlistService.obtenerPlaylistsSeguidas(this.token).subscribe(
      response =>{
       
       let resultado:any = response;
       this.playlists_seguidas =resultado.playlists_buscados.playlists;
       console.log("playlists_Seguidas",this.playlists_seguidas)
      },
      error=>{
       console.log(error)
      }  
    )


  }



 
}