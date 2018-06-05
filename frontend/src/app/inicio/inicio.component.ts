


import { Component,OnInit,ViewChild} from '@angular/core';
import {UserService} from '../services/usuario.service';
import {IdentidadService} from '../services/identidad.service';
import {Usuario} from '../models/usuario';
import {GLOBAL} from '../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router';

declare var $ :any;
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './inicio.component.html',

  //En providers se cargan todos los servicios
  providers:[UserService,IdentidadService]
})
export class InicioComponent implements OnInit{
  public titulo = 'UGRMUSIC';
  public usuario: Usuario;
  public usuario_registrarse: Usuario;
  public url;
  public confirmapassword:string;
  //Todos los datos del usuario
  public identidad;

  public token;

  public mensajeerror;

  public mensajeerrorregistrarse;
 
  public emaildos;

  public originalUrl: string;
  constructor(private _userService:UserService,private _route:ActivatedRoute,
    private _router: Router,public _identidadService:IdentidadService){
  	this.usuario = new Usuario('','','','','','ROLE_USER','');
    this.usuario_registrarse = new Usuario('','','','','','ROLE_USER','');
    this.url = GLOBAL.url;

    this.emaildos = "";

    this.token = this._userService.getToken();
   
  
  }

  //Esta función se ejecuta al principio
  //del componente
  ngOnInit(){

      //Asignamos los valores de token
      //Y de identidad

      //this.identidad = this._userService.getIdentidad();
        this.getIdentidadPorToken();
        alert("HOLAAA")
       



  }


  public onSubmit(){

    console.log(this.usuario);


          //Creamos el localstorage
          //Esto es parecido a lo anterior solo que ahora obtenemos el token con gethash = true
                 this._userService.signup(this.usuario,'true').subscribe(
                  response => {
                    console.log(response);
                    let result:any = response;
                    let token:any = result.token;
                    this.token = token;

                    if(this.token.length <= 0){
                      alert("El token no se ha generado correctamente");
                    }
                    else{
                      //Creamos el localstorage

                      //Creamos la sesión con localStorage


                      localStorage.setItem('token',token);


                      console.log("El token es: "+ token);
                        this.getIdentidadPorToken();


                      //Conseguimos el token para las peticiones
                    }
                  },

                  error =>{
                    var mensaje =<any> error;
                      //console.log(error.message);
                    if(mensaje !=null){
                      //var body = JSON.parse(error._body);
                      this.mensajeerror= "error al loguearse";
                      //console.log(error);
                    }
                  }

                );
      }

  public logout(){
    //localStorage.removeItem("identidad");
    localStorage.removeItem("token");
    localStorage.clear();
    this.identidad = null;
    this.token = null;
    this.usuario = new Usuario('','','','','','ROLE_USER','');
    this.usuario_registrarse = new Usuario('','','','','','ROLE_USER','');
    this._identidadService.establecerIdentidad(null)
    //Redireccionamos a raíz
    this._router.navigate(['/']);

  }
  public mensajeregistrarse;
  public registrarse(){
    console.log(this.usuario_registrarse);
  //  console.log(this.input.value);
    console.log(this.usuario_registrarse.password);


    if(this.confirmapassword != this.usuario_registrarse.password){
      this.mensajeerrorregistrarse = "Las contraseñas no son iguales";
    }
    else{
      this.mensajeerrorregistrarse = null;

      this._userService.registrarse(this.usuario_registrarse).subscribe(
        response =>{
          console.log(response);
          this.mensajeerrorregistrarse = null;
          this.mensajeregistrarse = "Te puedes loguear con: " + this.usuario_registrarse.email;
          this.usuario_registrarse = new Usuario('','','','','','ROLE_USER','');
        },
        error =>{
          var error =<any> error;
          this.mensajeerrorregistrarse ="Error al registrarte";
        }
      )
    };

  }


  getIdentidadPorToken(){
    this._userService.getIdentidadConToken().subscribe(
     response =>{
       let result:any = response;
      this.identidad = result.usuario;
      console.log("This.identidad", result.usuario);
      this._identidadService.establecerIdentidad(this.identidad);

     },
     error =>{
       //Error
       this.identidad = null;
       //Cerramos sesión
       this.logout();
     }
   );
  }

  RestablecerContrasenaModal()
  {
    $('#myModal').appendTo("body").modal('show');
  }



  restablecerContrasena()
  {
    console.log(this.usuario.email);

    this._userService.enviarEmailContrasena(this.usuario.email).subscribe(

      response =>{
        this.mensajeregistrarse ="Ya puedes ver tu correo si te ha llegado un mensaje"
        $('#myModal').appendTo("body").modal('hide');
        
      },
      error=>{
        this.mensajeerrorregistrarse ="Ha habido un error"
        $('#myModal').appendTo("body").modal('hide');
        console.log(error)
      }
    );


    
    
  }

}
