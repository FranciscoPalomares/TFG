import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
export class AlbumService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
        }

        addAlbum(token,album){
            let params = JSON.stringify(album);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.post(this.url+'guardar-album', params, {headers: headers});
        }

        getAlbum(token,id){

            console.log("id album",id);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

           

            return this.http.get(this.url+'get-album/' + id, {headers: headers});
        }

        editarAlbum(token,album,id:String){
            let params = JSON.stringify(album);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.put(this.url+'actualizar-album/' + id,params, {headers: headers});
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

        eliminarAlbum(token,id){

           
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

           

            return this.http.delete(this.url+'eliminar-album/' + id, {headers: headers});
        }


        filtrarAlbumes(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-albumes/' + valor , {headers: headers});
        }
}