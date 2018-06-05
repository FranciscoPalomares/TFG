import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuarioService } from '../../services/usuario.service'
import { PlaylistService } from '../../services/playlist.service'
import {Playlist} from '../../models/playlist'

import {PlaylistPage} from '../../pages/playlist/playlist'
import {Usuario} from '../../models/usuario'
import {ReproductorService} from '../../services/reproductor.service'

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  public token;
  public playlists_creadas:Playlist[];
  public playlists_seguidas:Playlist[];
  public id;
  public usuario:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _usuarioService:UsuarioService, private _playlistService:PlaylistService,
    private _ServicioReproductor:ReproductorService) {
      this.usuario = navParams.get('usuario')
      this.id = this.usuario.id
    this.token = _usuarioService.getToken()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');

    this.getPlaylistsCreadas()
    this.getPlaylistsSeguidas()
  }

  getPlaylistsCreadas(){

    this._playlistService.obtenerPlaylistsCreadasUsuario(this.token,this.id).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)

        this.playlists_creadas = resultado.playlists_buscados;
      }
    )
  }

  getPlaylistsSeguidas(){

    this._playlistService.obtenerPlaylistsSeguidasUsuario(this.token,this.id).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)

        this.playlists_seguidas = resultado.playlists_buscados;
      }
    )
  }



  irPlaylist(playlist:Playlist){    

    this.navCtrl.push(PlaylistPage,{
      'id':playlist.id
    })
  }

}
