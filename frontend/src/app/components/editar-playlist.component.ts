import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Playlist} from '../models/playlist';
import {ArtistService} from '../services/artista.service';
import {Album} from '../models/album';
import {Usuario} from '../models/usuario';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';

import {PlaylistService} from '../services/playlist.service';

@Component({
  selector: 'playlist-editar',
  templateUrl:'../views/playlist-add.html',
  providers:[UserService,PlaylistService]
})

export class PlaylistEditarComponent implements OnInit{

  public titulo_apartado: string;
  public identidad;
  public token;
  public url:string;
  public id;
    public playlist:Playlist;
  public usuario:Usuario;
    public nombre_playlist:String;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _playlistService:PlaylistService
  ){
    this.titulo_apartado = "Editar playlist";
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.playlist = new Playlist("","")
   
    this.identidad = this._identidadService.identidad;    
  }

  ngOnInit(){
    console.log("Playlist editar cargado");

    this.getPlaylist();

   
   
  }

  addPlaylist(){
      console.log(this.playlist.nombre)

      this._playlistService.editarPlaylist(this.token,this.playlist).subscribe(
          response =>{
            console.log(response);

            let resultado:any = response;
            this._router.navigate(['/playlist/' + this.id]);
          },
          error =>{
              console.log("error")
          }
      )


  }

  getPlaylist(){

    this._route.params.forEach((params:Params)=>
    {
        this.id = params['id'];

        console.log("id playlist",this.id);

        this._playlistService.obtenerAlbum(this.token,this.id).subscribe(
          response =>{
            console.log(response)
            let resultado:any = response;

            this.playlist.nombre  =resultado.playlist_buscado.nombre;
            this.playlist.id  =resultado.playlist_buscado.id;
            this.usuario = resultado.playlist_buscado.Usuario;
            console.log("usuario dee",this.identidad.id)
            if(this.usuario.id != this.identidad.id){
              this._router.navigate(['/'])
            }

          },
          error =>{
            console.log(error)
          }
        )

    });


  }
}