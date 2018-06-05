import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PlaylistService} from '../../services/playlist.service'
import { UsuarioService } from '../../services/usuario.service'
import {Playlist} from '../../models/playlist'

import {PlaylistPage} from '../../pages/playlist/playlist'
import {ReproductorService} from '../../services/reproductor.service'
import { AlertController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {

  public token;
  public playlists_creadas:Playlist[];
  public playlists_seguidas:Playlist[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _playlistService:PlaylistService,
private _usuarioService:UsuarioService,
private _ServicioReproductor:ReproductorService,private alertCtrl: AlertController,private toastCtrl: ToastController) {

    this.token = _usuarioService.getToken()
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PlaylistsPage');

    this.getPlaylistsCreadas()
    this.getPlaylistsSeguidas()
  }

  getPlaylistsCreadas(){
    this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(
      response=>{
        let resultado:any = response;
        console.log(resultado)
        this.playlists_creadas = resultado.playlists_buscados
      }
    )
  }

  getPlaylistsSeguidas(){
    this._playlistService.obtenerPlaylistsSeguidas(this.token).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)
        this.playlists_seguidas = resultado.playlists_buscados.playlists
        console.log("seguidas",this.playlists_seguidas)
      }
    )

  }

  irPlaylist(playlist:Playlist){

    

    this.navCtrl.push(PlaylistPage,{
      'id':playlist.id
    })
  }


  crearPlaylist(){
    let alert = this.alertCtrl.create({
      title: 'Crear Playlist',
      inputs: [
        {
          name: 'nombre_playlist',
          placeholder: 'Nombre de la playlist'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Crear playlist',
          handler: data => {
            let resultado:any =data
           console.log(data.nombre_playlist)
           this.crearUnaPlyslist(data.nombre_playlist)
        }
      }
      ]
    });
    alert.present();
  }





  crearUnaPlyslist(nombre){
    let playlist:Playlist = new Playlist("",nombre)
    this._playlistService.addPlaylist(this.token,playlist).subscribe(
      response =>{
        this.presentToast("Se ha creado con éxito")
      },
      error =>{
        this.presentToast("hay un error al crear la playlist")
      }
    )
  }

  presentToast(texto) {
    let toast = this.toastCtrl.create({
      message: texto,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  

}
