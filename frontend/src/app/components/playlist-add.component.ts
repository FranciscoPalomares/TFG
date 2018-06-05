import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Playlist} from '../models/playlist';
import {ArtistService} from '../services/artista.service';
import {Album} from '../models/album';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';

import {PlaylistService} from '../services/playlist.service';
declare var $ :any;
@Component({
  selector: 'playlist-add',
  templateUrl:'../views/playlist-add.html',
  providers:[UserService,PlaylistService]
})

export class PlaylistAddComponent implements OnInit{

  public titulo_apartado: string;
  public identidad;
  public token;
  public url:string;

    public playlist:Playlist;

    public nombre_playlist:String;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _playlistService:PlaylistService
  ){
    this.titulo_apartado = "Crear nueva playlist";
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.playlist = new Playlist("","")
   
    this.identidad = this._identidadService.identidad;    
    $('#modalPlaylists').appendTo("body").modal('hide');
   
  }

  ngOnInit(){
    console.log("Playlist add cargado");
    
  }

  addPlaylist(){
      console.log(this.playlist.nombre)

      this._playlistService.addPlaylist(this.token,this.playlist).subscribe(
          response =>{
            console.log(response);
            let resultado :any = response;
            this._router.navigate(['/playlist/' + resultado.playlist_creada.id]);
          },
          error =>{
              console.log("error")
          }
      )


  }
}