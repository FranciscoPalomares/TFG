import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';

@Component({
  selector: 'app-restablecercontrasena',
  templateUrl: './restablecercontrasena.component.html',
  providers:[UserService],
  styleUrls: ['./restablecercontrasena.component.css']
})
export class RestablecercontrasenaComponent implements OnInit {
  token:any;
  formulario:any;


  constructor(private _route:ActivatedRoute,
    private _router: Router,private _userService:UserService) { 


      this._route.params.forEach((params:Params)=>{
        let token_parametros = params['token'];


        this.token = token_parametros;
      });

      console.log("token",this.token)
     

    }

    public error_mensaje:any = null;

  ngOnInit() {
    this._userService.determinarTokenContrasena(this.token).subscribe(
      response =>{
        console.log(response)
      },
      error =>{
        console.log("error",error)
        this.error_mensaje = "Hay un error en la petición"
      }
    )
  }

  mensaje_perfecto :any;
  creaNuevaContrasena(){
    console.log(this.formulario)


    this._userService.determinarTokenContrasena(this.token).subscribe(
      response =>{
        console.log(response)

        this._userService.actualizarContrasena(this.formulario,this.token).subscribe(
          response =>{
            console.log(response)
            this.mensaje_perfecto = true;
          },
          error =>{
            console.log(error)
          }
        )
      },
      error =>{
        console.log("error",error)
        this.error_mensaje = "Hay un error en la petición"
      }
    )

  }

}
