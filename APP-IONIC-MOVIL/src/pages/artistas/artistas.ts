import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ArtistaService} from '../../services/artista.service'
import {UsuarioService} from '../../services/usuario.service'
import {ReproductorService} from '../../services/reproductor.service'
import {Artista} from '../../models/artista'
import {GLOBAL} from '../../services/GLOBAL.service'
import {ArtistaPage} from '../artista/artista'


@IonicPage()
@Component({
  selector: 'page-artistas',
  templateUrl: 'artistas.html',
})
export class ArtistasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _artistasService:ArtistaService,private _usuarioService:UsuarioService,
  private _ServicioReproductor:ReproductorService) {
    this.url =GLOBAL.url;
  }

  public token;
  public artistas:Artista[];
  public url:String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistasPage');
    this.token = this._usuarioService.getToken();
    this.getArtistas();
  }

  getArtistas(){
    this._artistasService.obtenerArtistas(this.token).subscribe(
      response =>{
        console.log(response)
        let resultado : any =response
        this.artistas = resultado.artistas_buscados
      }
    )
  }

  irArtista(artista:Artista){
    this.navCtrl.push(ArtistaPage,{
      'id':artista.id
    })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getArtistas();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
