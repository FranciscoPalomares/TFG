import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {GLOBAL} from './GLOBAL.service'

@Injectable()
export class ArtistaService {

    url:String;
    
 
    constructor( private http: HttpClient) {
        this.url = GLOBAL.url
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