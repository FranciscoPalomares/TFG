import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//Servicios
import {AlbumService} from '../../services/album.service'
import {CancionService} from '../../services/cancion.service'
import {ArtistaService} from '../../services/artista.service'
import {PlaylistService} from '../../services/playlist.service'
import {UsuarioService} from '../../services/usuario.service'
import {GLOBAL} from '../../services/GLOBAL.service'
import {ReproductorService} from '../../services/reproductor.service'

//Modelos
import {Album} from '../../models/album'
import {Cancion} from '../../models/cancion'
import {Playlist} from '../../models/playlist'
import {Artista} from '../../models/artista'
import {Usuario} from '../../models/usuario'

//Paginas
import {ArtistaPage} from '../artista/artista'
import {PlaylistPage} from '../playlist/playlist'
import {AlbumPage} from '../album/album'
import {UsuarioPage} from '../usuario/usuario'

import { ActionSheetController } from 'ionic-angular'

import {ListaPlaylistsPage} from '../lista-playlists/lista-playlists'

import { PopoverController } from 'ionic-angular';

import { ChangeDetectorRef } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {


  public token;
  public url

  public albumes:Album[]
  public artistas:Artista[]
  public playlists:Playlist[]
  public canciones:Cancion[]
  public usuarios:Usuario[]


  public cola:Cancion[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _albumService:AlbumService,private _cancionService:CancionService,
private _artistaService:ArtistaService,private _playlistService:PlaylistService,
private _usuarioService:UsuarioService,
private _ServicioReproductor:ReproductorService,public actionSheetCtrl: ActionSheetController,
public popoverCtrl: PopoverController,private changeDetector: ChangeDetectorRef) {


    this.token = this._usuarioService.getToken()
   
    this.url = GLOBAL.url;

    this.reproduciendo =false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  buscar(searchbar){
    console.log(searchbar.srcElement.value)

    let valor = searchbar.srcElement.value
  

    if(valor!=undefined){
      this.filtrarAlbumes(valor)
    this.filtrarArtistas(valor)
    this.filtrarCanciones(valor)
    this.filtrarPlaylists(valor)
    this.filtrarUsuarios(valor)
    }
    
  }


  filtrarAlbumes(valor){
    this._albumService.filtrarAlbumes(this.token,valor).subscribe(
      response =>{
        let resultado:any =response;
        console.log(resultado)

        this.albumes = resultado.albumes_buscados;


      }
    )
  }

  filtrarArtistas(valor){
    this._artistaService.filtrarPlaylists(this.token,valor).subscribe(
      response =>{
        let resultado:any = response;
        this.artistas = resultado.artistas_buscados;

      }
    )
  }

  filtrarCanciones(valor){
    this._cancionService.filtrarCanciones(this.token,valor).subscribe(
      response =>{
          let resultado:any = response;
          this.canciones = resultado.canciones_buscados;
          console.log("canciones buscadas",this.canciones)

      }
    )
  }

  filtrarPlaylists(valor){
    this._playlistService.filtrarPlaylists(this.token,valor).subscribe(
      response =>{
          let resultado:any = response;
          this.playlists = resultado.playlists_buscados;
      }          
     )
  }

  filtrarUsuarios(valor){
    this._usuarioService.filtrarUsuarios(this.token,valor).subscribe(
      response =>{
        let resultado:any = response;
        this.usuarios = resultado.usuarios_buscados;
      }
    )
  }

  irAlbum(album:Album){
    console.log("Album a ir",album)
    this.navCtrl.push(AlbumPage,{
      'id':album.id
    })
  }

  irArtista(artista:Artista){
    this.navCtrl.push(ArtistaPage,{
      'id':artista.id
    })
  }

  irPlaylist(playlist:Playlist){
    console.log(" Playlist a ir",playlist)
    this.navCtrl.push(PlaylistPage,{
      'id':playlist.id
    })
  }

  irUsuario(usuario:Usuario){
    console.log(" Usuario a ir",usuario)
    this.navCtrl.push(UsuarioPage,{
      'usuario':usuario
    })
  }


  opciones(cancion:Cancion){
    let actionSheet = this.actionSheetCtrl.create({
      title: cancion.nombre,
      buttons: [
        {
          text: 'Añadir a cola',
          role: 'destructive',
          handler: () => {
            this._ServicioReproductor.addCancionCola(cancion)
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
  public reproduciendo:boolean;
  reproducirCancion(cancion:Cancion){


    this._ServicioReproductor.reproduciendo =true;
    this._ServicioReproductor.sonando =true;
      this.reproduciendo=true;

      this.changeDetector.detectChanges()
 
   
    this._ServicioReproductor.establecerCancion(cancion)
    //this._ServicioReproductor.establecerArtista(this.artista)
    //this._reproductorService.establecerAlbum(this.album)

    this._ServicioReproductor.playCancion();

    this.administrarColaCanciones(cancion)
  }

  addCancionCola(cancion){
    this._ServicioReproductor.addCancionCola(cancion)
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

    this._ServicioReproductor.establecerCola(this.cola);

  }

  compararCancion(id){

    if(!this._ServicioReproductor.cancion_sonando)
    return false;
    
    else
    return id == this._ServicioReproductor.cancion_sonando.id ;
  }




}
