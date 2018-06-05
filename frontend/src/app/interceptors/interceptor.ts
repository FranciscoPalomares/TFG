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
  
  import {UserService} from '../services/usuario.service'
  import {IdentidadService} from '../services/identidad.service'

  import {Router,ActivatedRoute,Params} from '@angular/router';

  import {Injector} from '@angular/core';

  @Injectable()
  export class MyInterceptor implements HttpInterceptor {


    
    constructor(private _route:ActivatedRoute,
      private _router: Router,public authService :UserService
      ,public identidadService:IdentidadService){
        
      }
      

/*
     constructor(private _route:ActivatedRoute,
      private _router: Router){
        
      }*/

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
            this.authService.eliminarToken() //Eliminamos el localStorage

            //Quitamos la identidad (usuario ya no está logueado)
            this.identidadService.establecerIdentidad(null)

            //Página de inicio (login)
            this._router.navigate(['/']);
          }

          
        }
      });
    }
  }
  
