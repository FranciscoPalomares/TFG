import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {RegistroPage} from '../registro/registro'
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


//Modelo Usuario
import {Usuario} from '../../models/usuario';

//Servicios
import {UsuarioService} from '../../services/usuario.service'


//Pagina TAB
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  private todo : FormGroup;

  private usuario:Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,private _userService:UsuarioService) {
    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.usuario = new Usuario('','','','','','','')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  abrirRegistro(){
    this.navCtrl.push(RegistroPage)
  } 


  login(){
    this.usuario.email = this.todo.controls.email.value
    this.usuario.password = this.todo.controls.password.value

    this._userService.login(this.usuario,'true').subscribe(
      response =>{
        let resultado:any = response;
        console.log(resultado)
        this._userService.setToken(resultado.token)
        this.navCtrl.setRoot(TabsPage)
      },
      error =>{
        console.log(error)
      }
    )
  }

}
