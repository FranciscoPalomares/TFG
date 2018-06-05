import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {GLOBAL} from './GLOBAL.service';

@Injectable()
export class AlbumService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
        }

       

        getAlbum(token,id){

            console.log("id album",id);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

           

            return this.http.get(this.url+'get-album/' + id, {headers: headers});
        }


        getAlbums(token,artistaId = null){

            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

           if(artistaId==null){
            return this.http.get(this.url+'get-albums/' , {headers: headers});

           }
           else{
            return this.http.get(this.url+'get-albums-artista/' + artistaId , {headers: headers});
           }

        }

        


        filtrarAlbumes(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-albumes/' + valor , {headers: headers});
        }

        ultimosAlbumes(token){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });
    
            return this.http.get(this.url+'ultimos-albumes', {headers: headers});
        }
}