import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,App} from 'ionic-angular';

import {UsuarioService} from '../../services/usuario.service'
import {Usuario} from '../../models/usuario'
import {GLOBAL} from '../../services/GLOBAL.service'

import {LoginPage} from '../../pages/login/login'

import { ToastController } from 'ionic-angular';
import {ReproductorService} from '../../services/reproductor.service'

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';


@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

  public token;
  public identidad;
  public usuario:Usuario;
  public url:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _usuarioService:UsuarioService ,private _app:App,
  private toastCtrl: ToastController,private _ServicioReproductor:ReproductorService,private camera: Camera,
  private transfer: FileTransfer,private actionSheet: ActionSheet) {

    this.token = _usuarioService.getToken();

    this.url = GLOBAL.url
  }

  ionViewDidLoad() {
    this.getIdentidadToken()
    
  }

  getIdentidadToken(){
    this._usuarioService.getIdentidadConToken().subscribe(
      response =>{
        let result:any = response;
       this.identidad = result.usuario;

       console.log(this.identidad)

       this.usuario = this.identidad;

       console.log(this.usuario)
      }
    )
  }


  cerrarSesion(){
    this._usuarioService.cerrarSesion();

    this._app.getRootNav().setRoot(LoginPage);

  }

  public tipo:String;

  senialarGrupo(tipo:String){

    if(tipo==this.tipo){
      console.log("son iguales")
      this.tipo = null
    }
    else
    this.tipo =tipo
  }

  comprobarGrupo(tipo:String){
    if(tipo==this.tipo)
      return true

    else
      return false
  }

  actualizarUsuario(){

    console.log(this.usuario)
      if(this.usuario.nombre.length>0 && this.usuario.apellidos.length>0){

      
          this._usuarioService.actualizar_usuario(this.usuario).subscribe(
            response =>{
              let resultado:any =response
              console.log("Usuario actualizado",resultado)
              this.usuario = resultado.usuario_actualizado[1][0];

              let toast = this.toastCtrl.create({
                message: 'Se ha actualizado correctamente',   
                duration: 3000,
                position: 'top',
                cssClass: "toast-success"
              });
          
              toast.present();
            },
            error=>{
              console.log(error)
              let toast = this.toastCtrl.create({
                message: 'Ha habido un error al actualizar',   
                duration: 3000,
                position: 'top',
                cssClass: "toast-error"
              });
          
              toast.present();
            }
          )
        }

    else{
      alert("Los campos son obligatorios")
    }


  }

  public base64Image : string;
  public uri;

  takePhoto(){
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.uri = imageData;
        this.base64Image = "data:image/jpeg;base64," + imageData;
        //this.photos.push(this.base64Image);
        //this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
   }


   deGaleria(){
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(imageData => {
        this.uri = imageData;

        this.base64Image = "data:image/jpeg;base64," + imageData;
        //this.photos.push(this.base64Image);
        //this.photos.reverse();

      }, 
      err => console.log(err));
   }

   subirFoto(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    let apiUrl = this.url + 'subir-foto-perfil/' + this.identidad.id;
 
    let options: FileUploadOptions = {
       fileKey: 'image',
       fileName: 'name.jpg',
       headers: {'Authorization':this.token}
    }
 
    fileTransfer.upload(this.uri, apiUrl, options)
     .then((data) => {
       // success
       //Mostrar mensaje que que ha sido subida con exito
       let resultado:any =data
       this.usuario.imagen = resultado.imagen;
        this.presentToast("Se ha actualizado correctamente");
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
     }, (err) => {
       // error
       alert(err.message);
     })
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


  obtenerFoto(){
    let buttonLabels = ['Desde cámara', 'Desde galería'];

    const opciones: ActionSheetOptions = {
      title: 'Elie opción para obtener foto',
      subtitle: 'Elige una opción:',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancelar',
      addDestructiveButtonWithLabel: 'Cancelar',
      //androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      androidTheme: 5,
      destructiveButtonLast: true
    };

    this.actionSheet.show(opciones).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);


      switch(buttonIndex){
        case 1:
          this.takePhoto()
          break;
        case 2:
          this.deGaleria();
          break;
      }

    });
  }

}
