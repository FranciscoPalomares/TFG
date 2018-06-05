import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,ModalController} from 'ionic-angular';

//Servicio reproductor
import {ReproductorService} from '../../services/reproductor.service'


import {ModalColaPage} from '../modal-cola/modal-cola'

@IonicPage()
@Component({
  selector: 'page-modal-reproductor',
  templateUrl: 'modal-reproductor.html',
})
export class ModalReproductorPage {

  public duracion;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private viewController:ViewController,private _ServicioReproductor:ReproductorService,
  public modalCtrl: ModalController) {
  }
  position: any = 0;
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalReproductorPage');
  }

  cerrarModal(){
    this.viewController.dismiss();
  }


  updateDuracion(e){
   
    this.duracion = this._ServicioReproductor.cancion_sonar.currentTime
    
  }

  siguienteCancion(){
    this._ServicioReproductor.siguienteCancion()
  }

  pasadaCancion(){
    this._ServicioReproductor.pasadaCancion()
  }

  abrirModalCola(){
    let profileModal = this.modalCtrl.create(ModalColaPage);
    profileModal.present();
  }
}
