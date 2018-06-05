import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {UsuarioService} from '../../services/usuario.service'
import {GLOBAL} from '../../services/GLOBAL.service'
import {Cancion} from '../../models/cancion'
import {Playlist} from '../../models/playlist'
import {PlaylistService} from '../../services/playlist.service'
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-playlists',
  templateUrl: 'lista-playlists.html',
})
export class ListaPlaylistsPage {
  public cancion:Cancion;
  public token;
  public url
  public playlists:Playlist[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _usuarioService:UsuarioService,
  private _playlistService:PlaylistService,private toastCtrl: ToastController,
  public viewCtrl: ViewController) {

      this.token = this._usuarioService.getToken()
      this.cancion = navParams.get('cancion')
    this.url = GLOBAL.url;

    console.log(this.cancion)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPlaylistsPage');

    this.getPlaylists()
  }

  getPlaylists(){
    this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(
      response =>{
        let resultado:any = response;
        console.log("playlists",resultado)
        this.playlists = resultado.playlists_buscados

      },
      error =>{
        console.log(error)
      }
    )
  }

  primeraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  addCancionPlaylist(playlist:Playlist){
    this._playlistService.addCancionPlaylist(this.token,this.cancion,playlist).subscribe(
      response =>{
        console.log(response)
        let toast = this.toastCtrl.create({
          message: 'Se ha añadido correctamente',   
          duration: 3000,
          position: 'top'
        });
    
        toast.present();
        this.viewCtrl.dismiss();
        
      },
      error =>{
        console.log(error)

        let toast = this.toastCtrl.create({
          message: 'Ha habido un error, puede que esté añadida',   
          duration: 3000,
          position: 'top'
        });
    
        toast.present();
        this.viewCtrl.dismiss();
      }
    )
  }

}
