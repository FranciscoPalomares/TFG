import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UsuarioService} from '../../services/usuario.service'
import {GLOBAL} from '../../services/GLOBAL.service'
import {AlbumService} from '../../services/album.service'
import {CancionService} from '../../services/cancion.service'
 import {Album} from '../../models/album'
 
 import {Cancion} from '../../models/cancion'
 import {Artista} from '../../models/artista'

 import { ActionSheetController } from 'ionic-angular'

 import {ReproductorService} from '../../services/reproductor.service'
 import { PopoverController } from 'ionic-angular';
  import {ListaPlaylistsPage} from '../lista-playlists/lista-playlists'
  
@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {
  public id;

  public token;
  public url
  public canciones:Cancion[];
  public album:Album;
  public artista:Artista;
  public cola:Cancion[];
  public reproduciendo:boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _usuarioService:UsuarioService,
    private _albumService:AlbumService, private _cancionService:CancionService,
    public actionSheetCtrl: ActionSheetController,
  private _reproductorService:ReproductorService,public popoverCtrl: PopoverController) {
    
    this.id = navParams.get('id')
    this.artista = navParams.get('artista')
    console.log(this.id)
    console.log("artista album",this.artista)
    this.token = this._usuarioService.getToken()
   
    this.url = GLOBAL.url;

    this.reproduciendo =false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
    this.getAlbum()
    this.getCanciones()
  }

  getAlbum(){
    this._albumService.getAlbum(this.token,this.id).subscribe(
      response =>{
        console.log(response)
        let resultado:any =response;
        this.album = resultado.album_buscado
      }
    )
  }

  getCanciones(){
    this._cancionService.getCanciones(this.token,this.id).subscribe(
      response=>{
        console.log(response)
        let resultado :any = response;
        this.canciones = resultado.canciones_buscadas;
      }
    )
  }


  opciones(cancion:Cancion){
    let actionSheet = this.actionSheetCtrl.create({
      title: cancion.nombre,
      buttons: [
        {
          text: 'Añadir a cola',
          role: 'destructive',
          handler: () => {
            this._reproductorService.addCancionCola(cancion)
          }
        },
        {
          text: 'Añadir a Playlist',
          handler: () => {
            let popover = this.popoverCtrl.create(ListaPlaylistsPage,{
              'cancion':cancion
            });
            popover.present({
             
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }


  primeraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  reproducirCancion(cancion:Cancion){
    this.reproduciendo=true;
    this._reproductorService.establecerCancion(cancion)
    this._reproductorService.establecerArtista(this.artista)
    this._reproductorService.establecerAlbum(this.album)
    this._reproductorService.reproduciendo =true;
    this._reproductorService.sonando =true;
    this._reproductorService.playCancion();

    this.administrarColaCanciones(cancion)
  }

  addCancionCola(cancion){
    this._reproductorService.addCancionCola(cancion)
  }


  administrarColaCanciones(cancion){

    this.cola = Object.assign([], this.canciones);

    for(var i=0; i < this.cola.length; i++) {
      if(this.cola[i].id ==cancion.id)
      {
        this.cola.splice(i,1);
        break; 
      }
    }

    this._reproductorService.establecerCola(this.cola);

  }

  compararCancion(id){

    if(!this._reproductorService.cancion_sonando)
    return false;
    
    else
    return id == this._reproductorService.cancion_sonando.id ;
  }

}


