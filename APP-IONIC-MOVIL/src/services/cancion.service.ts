import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


import {GLOBAL} from './GLOBAL.service'

@Injectable()
	export class CancionService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
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

        
        
        
        filtrarCanciones(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-canciones/' + valor , {headers: headers});
        }
}