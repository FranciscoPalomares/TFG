import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Artista} from '../../models/artista'
import {ArtistaService} from '../../services/artista.service'
import {UsuarioService} from '../../services/usuario.service'
import {GLOBAL} from '../../services/GLOBAL.service'
import {AlbumService} from '../../services/album.service'

import {Album} from '../../models/album'

import {AlbumPage} from '../album/album'

import {ReproductorService} from '../../services/reproductor.service'

@IonicPage()
@Component({
  selector: 'page-artista',
  templateUrl: 'artista.html',
})
export class ArtistaPage {
  public artista:Artista;
  public albumes:Album[];
  public id;
  public token;
  public url
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _artistasService:ArtistaService,private _usuarioService:UsuarioService,
  private _albumService:AlbumService,
  private _ServicioReproductor:ReproductorService) {
    this.id = navParams.get('id')
      this.token = this._usuarioService.getToken()
    console.log(this.id)
    this.url = GLOBAL.url;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistaPage');
    this.getArtista()
    this.getAlbumes()
    
  }


  getArtista(){
    this._artistasService.obtenerArtista(this.token,this.id).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)
        this.artista = resultado.artista_buscado;
        console.log(this.artista)
      },
      error=>{
        console.log(error)
      }
    )
  }


  getAlbumes(){
    this._albumService.getAlbums(this.token,this.id).subscribe(
      Response=>{
        let resultado:any =Response;
        console.log(resultado)
        this.albumes = resultado.albums_buscados;
        console.log(this.albumes.length)
      }
    )

    
  }

  irAlbum(album:Album){
    this.navCtrl.push(AlbumPage,{
      'id':album.id,
      'artista':this.artista
    })
  }




}
