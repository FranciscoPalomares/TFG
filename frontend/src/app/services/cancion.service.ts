import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
	export class CancionService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
        }

        crearCancion(token,cancion){
            let params = JSON.stringify(cancion);

            console.log("CreaCancion",params)

            let headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.post(this.url+'guardar-cancion', params, {headers: headers});
        }

        getCancion(token,id){           


            let headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'get-cancion/' + id,  {headers: headers});
        }   

        getCanciones(token,id){        

            let headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            if(id==null){
                return this.http.get(this.url+'get-canciones/' ,  {headers: headers});
            }
            else{
                return this.http.get(this.url+'get-canciones-album/' + id,  {headers: headers});
            }

           
        }   

        borrarCancion(token,id){        
            
            let headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });
           
            return this.http.delete(this.url+'eliminar-cancion/'+id ,  {headers: headers});           
        }   

        actualizarCancion(token,id,cancion){        
            
            let params = JSON.stringify(cancion);

            console.log("CreaCancion",params)

            let headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.put(this.url+'actualizar-cancion/'+id, params, {headers: headers});          
        }  
        
        
        filtrarCanciones(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-canciones/' + valor , {headers: headers});
        }
}