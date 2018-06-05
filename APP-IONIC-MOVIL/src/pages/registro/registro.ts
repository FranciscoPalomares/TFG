import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';


//Modelo Usuario
import {Usuario} from '../../models/usuario';


//Servicios
import {UsuarioService} from '../../services/usuario.service'

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {


  private todo : FormGroup;
  private usuario:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,private toastCtrl: ToastController
    ,private _userService:UsuarioService) {
      this.usuario = new Usuario('','','','','','','')

      this.todo = this.formBuilder.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        apellidos: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },{validator: this.matchingPasswords('password', 'confirmPassword')});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }


  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
  
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  registrarse(){

    this.usuario.nombre =this.todo.controls.nombre.value
    this.usuario.apellidos =this.todo.controls.apellidos.value
    this.usuario.email = this.todo.controls.email.value
    this.usuario.password = this.todo.controls.password.value
    


    this._userService.registrarse(this.usuario).subscribe(
      response =>{
        let toast = this.toastCtrl.create({
          message: 'El usuario se ha creado',   
          duration: 5000,
          position: 'top'
        });
    
        toast.present();
        this.navCtrl.pop();
      },
      error=>{
        let toast = this.toastCtrl.create({
          message: 'El usuario no se ha creado correctamente, puede ser que el email esté registrado',   
          duration: 8000,
          position: 'top'
        });
    
        toast.present();
      }
    )


    
    
   
    
  }

}
