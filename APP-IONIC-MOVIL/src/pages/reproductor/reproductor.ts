import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import {ModalReproductorPage} from '../modal-reproductor/modal-reproductor'
import {NgProgressService} from 'ng2-progressbar'

//Servicio reproductor
import {ReproductorService} from '../../services/reproductor.service'
@Component({
  selector: 'page-reproductor',
  templateUrl: 'reproductor.html'
})
export class ReproductorPage {

  
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private _ServicioReproductor:ReproductorService) {

  }

  abrirModal(){
    let profileModal = this.modalCtrl.create(ModalReproductorPage);
    profileModal.present();
  }

}

