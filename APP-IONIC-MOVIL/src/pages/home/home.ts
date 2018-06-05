import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Servicio reproductor
import {ReproductorService} from '../../services/reproductor.service'
import {ArtistaService} from '../../services/artista.service'
import {UsuarioService} from '../../services/usuario.service'

import {AlbumService} from '../../services/album.service'

import {Artista} from '../../models/artista'
import {Album} from '../../models/album'
import {GLOBAL} from '../../services/GLOBAL.service'


import {ArtistaPage} from '../../pages/artista/artista'
import {AlbumPage} from '../../pages/album/album'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public artistas:Artista[]
  public albumes:Album[]
  public token;
  public url;

  constructor(public navCtrl: NavController,private _ServicioReproductor:ReproductorService,
  private _artistaService:ArtistaService,private _usuarioService:UsuarioService,
private _albumService:AlbumService) {
    this.token = this._usuarioService.getToken()
    this.url = GLOBAL.url
  }


  ionViewWillEnter() {
    this.getAlbumes()
    this.getArtistas()
    
  }

  getArtistas(){

    this._artistaService.ultimosArtistas(this.token).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)
        this.artistas = resultado.artistas_buscados;
        console.log(this.artistas)
      }
      
    )
  }

  irArtista(artista:Artista){
    this.navCtrl.push(ArtistaPage,{
      'id':artista.id
    })
  }


  getAlbumes(){
    this._albumService.ultimosAlbumes(this.token).subscribe(
      response =>{
        let resultado:any=response;
        this.albumes = resultado.albumes_buscados
        console.log(this.albumes)
      },
      error =>{
        console.log(error)
      }
    )
  }

  irAlbum(album:Album){
    this.navCtrl.push(AlbumPage,{
      'id':album.id
    })
  }


  

}
