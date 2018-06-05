import { Component,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Playlist} from '../../models/playlist'
import {Cancion} from '../../models/cancion'
import {Usuario} from '../../models/usuario'


import {UsuarioService} from '../../services/usuario.service'
import {PlaylistService} from '../../services/playlist.service'

import {ReproductorService} from '../../services/reproductor.service'
import { PopoverController } from 'ionic-angular';
 import {ListaPlaylistsPage} from '../lista-playlists/lista-playlists'

 import { ActionSheetController } from 'ionic-angular'

 import { ToastController } from 'ionic-angular';

 import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  
  public id;
  public token;
  public playlist:Playlist;
  public canciones:Cancion[];
  public usuario:Usuario
  public identidad;
  public laSigo:boolean;
  public cola:Cancion[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private ref: ChangeDetectorRef,
    private _usuarioService:UsuarioService,private _playlistService:PlaylistService,
    private _reproductorService:ReproductorService,public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController,private toastCtrl: ToastController,private alertCtrl: AlertController) {
      this.token = this._usuarioService.getToken()
      this.id = navParams.get('id')
      this.playlist = new Playlist("","")

      setInterval(() => {
        this.ref.detectChanges();
      }, 1500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
    this.getPlaylist()
  }

  getPlaylist(){

    this._playlistService.obtenerPlaylist(this.token,this.id).subscribe(
      response =>{
        let resultado:any = response;

        console.log(resultado)
        
        this.playlist.nombre  =resultado.playlist_buscado.nombre;
        this.playlist.id  =resultado.playlist_buscado.id;

        
        this.canciones = resultado.playlist_buscado.canciones;
        this.usuario = resultado.playlist_buscado.Usuario;

        this.getIdentidadToken();       

      },
      error=>{
        console.log(error)
      }
    )
  }

  getIdentidadToken(){
    this._usuarioService.getIdentidadConToken().subscribe(
      response =>{
        let result:any = response;
       this.identidad = result.usuario;
       console.log("This.identidad", result.usuario);
      
       if(this.usuario.id != this.identidad.id){
        this.verSeguida();
      }
      }
     
    );
  }

  verSeguida(){   
          
      console.log("Ver seguidaaaa")
        this._playlistService.verSeguida(this.token,this.id).subscribe(
          response =>{
            console.log("LASIGO",response);
            this.laSigo = true;
          },
          error =>{
            console.log(error)
            this.laSigo = false;
          }
        )

    
  }

  seguirPlaylist(){

    this._playlistService.seguirPlaylist(this.token,this.id).subscribe(

      response =>{
        this.laSigo=true;
      }
    )

  }


  dejarSeguirPlaylist(){
    this._playlistService.dejarSeguirPlaylist(this.token,this.id).subscribe(

      response =>{
        this.laSigo=false;
      },
      error=>{
        console.log(error)
      }
    )
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

  reproducirCancion(cancion:Cancion){
    this._reproductorService.establecerCancion(cancion)
    //this._reproductorService.es_album = true

    //this._reproductorService.obtenerAlbumArtista(cancion.id)
    this._reproductorService.reproduciendo =true;
    this._reproductorService.sonando =true;
    this._reproductorService.playCancion();

    this.administrarColaCanciones(cancion)

    
  }

  primeraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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


  opcionesPlaylist(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones de playlist',
      buttons: [
        {
          text: 'Modificar nombre',
    
          handler: () => {
            this.modificarPlaylist()
          }
        },
        {
          text: 'Borrar playlist',
          role: 'destructive',
          handler: () => {
            this._playlistService.borrarPlaylist(this.token,this.playlist).subscribe(
              response =>{
                this.presentToast("Se ha borrado correctamente")
                this.navCtrl.pop()
              },
              error =>{
                this.presentToast("Hay un error al borrar playlist")
              }

            )
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
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



  modificarPlaylist(){
    let alert = this.alertCtrl.create({
      title: 'Modificar Playlist',
      inputs: [
        {
          name: 'nombre_playlist',
          placeholder: 'Nuevo nombre de la playlist',
          
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
          text: 'Modificar playlist',
          handler: data => {
            let resultado:any =data
           console.log(resultado.nombre_playlist)
           let copia_playist:Playlist = this.playlist;
           copia_playist.nombre = data.nombre_playlist
           this._playlistService.editarPlaylist(this.token,copia_playist).subscribe(
            response =>{
              this.playlist.nombre = copia_playist.nombre
              this.presentToast("Se ha actualizado correctamente")
            },
            error =>{
              this.presentToast("No se ha actualizado correctamente")
            }
           )
        }
      }
      ]
    });
    alert.present();
  }
}
