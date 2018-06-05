import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
  
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/observable/throw';

  import { Injectable } from '@angular/core';




  import {LoginPage} from '../pages/login/login'
  import {App} from 'ionic-angular';

  //Importamos los servicios
  import {UsuarioService}from '../services/usuario.service'
  @Injectable()
  export class MyInterceptor implements HttpInterceptor {


    
    constructor(private _userService:UsuarioService,private _app:App){
        
      }
      

      cerrarSesion(){
        this._userService.cerrarSesion();
    
        this._app.getRootNav().setRoot(LoginPage);
    
      }

      


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      

      const customReq = request.clone({
        
      });  


    

      return next.handle(customReq).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          
          console.log("Esado de la petición->",event.status)
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse ){
          console.log("Esado de la petición error->",err.status)
          if (err.status == 401 || err.status == 403  ) {
            console.log("SE REFRESCA EL TOKEN")
            this._userService.refrescarToken().subscribe(
              
              response =>{
                let resultado:any =response;

                this._userService.setToken(resultado.token)
                //alert(this._userService.getToken())
                let token = this._userService.getToken()

                const authReq = request.clone({ headers: request.headers.set('Authorization', token) });
    
                //alert("SE HA REFRESCADO EL TOKEN")
                return next.handle(authReq); //se crea otra vez la petición
              
  
  
            },
              error =>{
                this._userService.setToken(null)
                this.cerrarSesion()
              }
            )
          }

          
        }
      });
    }
  }
  
