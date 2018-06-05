import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
	export class ArtistService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
        }

        addArtista(token,artista){
            let params = JSON.stringify(artista);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.post(this.url+'guardar-artista', params, {headers: headers});
        }

        obtenerArtistas(token){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'get-artistas/', {headers: headers});

        }

        obtenerArtista(token,id){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'artista/'+id, {headers: headers});

        }

        editarArtista(token,id,artista){
            let params = JSON.stringify(artista);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.put(this.url+'actualizar-artista/'+ id, params, {headers: headers});
        }

        eliminarArtista(token,id){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.delete(this.url+'eliminar-artista/'+id, {headers: headers});

        }

        filtrarPlaylists(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-artistas/' + valor , {headers: headers});
        }

        ultimosArtistas(token){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'ultimos-artistas', {headers: headers});
        }
    }