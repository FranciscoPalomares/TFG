import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';


@Component({
  selector: 'restablecer-contrasena',
  templateUrl:'../views/restablecer-contrasena.html',
  providers:[UserService]
})

export class RestablecerContrasenaComponent implements OnInit{


  public url:string;
    public password;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ){
      var array_url = this._router.url.split("/")
    console.log("ruta desde",array_url[1])
  }

  ngOnInit(){
    console.log("Album add cargado");
   
  }

}