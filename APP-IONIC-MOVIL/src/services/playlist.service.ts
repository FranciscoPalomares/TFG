import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



import {GLOBAL} from './GLOBAL.service';

@Injectable()
export class PlaylistService{
		public url: string;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
        }

        addPlaylist(token,playlist){
            let params = JSON.stringify(playlist);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.post(this.url+'crear-playlist', params, {headers: headers});
        }

        obtenerPlaylist(token,id){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'get-playlist/'+id, {headers: headers});

        }

        obtenerPlaylistsSeguidas(token){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'/get-playlists-seguidas', {headers: headers});
        }

        obtenerPlaylistsCreadas(token){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'/get-playlists-creadas', {headers: headers});
        }

        editarPlaylist(token,playlist){
            let params = JSON.stringify(playlist);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.put(this.url+'modificar-playlist/'+playlist.id, params, {headers: headers});
        }

        borrarPlaylist(token,playlist){
            
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.delete(this.url+'eliminar-playlist/'+playlist.id, {headers: headers});
        }

        addCancionPlaylist(token,cancion,playlist){
            let params = JSON.stringify(cancion);
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.post(this.url+'add-cancion-playlist/'+playlist.id,params, {headers: headers});
        }

        filtrarPlaylists(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-playlists/' + valor , {headers: headers});
        }

        seguirPlaylist(token,id){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'seguir-playlist/' + id , {headers: headers});
        }


        dejarSeguirPlaylist(token,id){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'dejar-seguir-playlist/' + id , {headers: headers});
        }



        verSeguida(token,id){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'ver-playlist-seguida/' + id , {headers: headers});
        }


        obtenerPlaylistsSeguidasUsuario(token,id){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'ver-playlists-seguidas-usuario/'+id, {headers: headers});
        }

        obtenerPlaylistsCreadasUsuario(token,id){
            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': token});

			 return this.http.get(this.url+'ver-playlists-creadas-usuario/'+id, {headers: headers});
        }

    }