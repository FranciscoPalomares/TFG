import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Playlist} from '../models/playlist';
import {ArtistService} from '../services/artista.service';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';
import {PlaylistService} from '../services/playlist.service'

import {Cancion} from '../models/cancion';
import {Usuario} from '../models/usuario';
@Component({
  selector: 'info-usuario',
  templateUrl:'../views/info-usuario.html',
  providers:[UserService,PlaylistService]
})

export class InfoUsuarioComponent implements OnInit{

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
    console.log("Info usuario add cargado");
    this._route.params.forEach((params:Params)=>{
      
      let id_usuario = params['id'];


      this._userService.infoUsuario(this.token,id_usuario).subscribe(
        response=>{
          let resultado:any = response;
          this.usuario = resultado.usuario;


        }
      )


      this._playlistService.obtenerPlaylistsCreadasUsuario(this.token,id_usuario).subscribe(
        response =>{
          let resultado:any = response;

          this.playlists = resultado.playlists_buscados;
        }
      )

      this._playlistService.obtenerPlaylistsSeguidasUsuario(this.token,id_usuario).subscribe(
        response =>{
          let resultado:any = response;

          this.playlists_seguidas = resultado.playlists_buscados;
        }
      )



      

    });
  }

  



 
}