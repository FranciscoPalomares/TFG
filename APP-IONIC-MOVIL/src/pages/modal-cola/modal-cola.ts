import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {ReproductorService} from '../../services/reproductor.service'

@IonicPage()
@Component({
  selector: 'page-modal-cola',
  templateUrl: 'modal-cola.html',
})
export class ModalColaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _reproductorService:ReproductorService, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalColaPage');
  }


  reorderItems(indexes) {
    let element = this._reproductorService.cola[indexes.from];
    this._reproductorService.cola.splice(indexes.from, 1);
    this._reproductorService.cola.splice(indexes.to, 0, element);
  }


  eliminarCancionCola(id){
    this._reproductorService.eliminarCancionCola(id)
  }

  

}
