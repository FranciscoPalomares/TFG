import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Cancion} from '../models/cancion';
import {Artista} from '../models/artista';
import {Album} from '../models/album';
import {GLOBAL} from './global';

@Injectable()

	export class ColaService{
		public url: string;
        public cola:Cancion[];
        public cancion_sonando:Cancion;
        public artista_sonando:Artista;
        public album_sonando:Album;
        public token;

        public pila:Cancion[];

		constructor(private http: HttpClient){
            this.url = GLOBAL.url;
            this.getToken();
            this.cola = []
            this.pila = []
            
        }

        establecerCola(cola_nueva:Cancion[]){
            this.cola = cola_nueva;
        }

        establecerCancion(cancion_reproduciendose:Cancion){
            this.cancion_sonando = cancion_reproduciendose;
        }

        obtenerAlbumArtista(id){

            let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': this.token});

			 this.http.get(this.url+'get-album-artista-cancion/'+id, {headers: headers}).subscribe(
                 response =>{
                    let resultado:any = response;
                    console.log("response getalbumartista",response)
                    this.album_sonando = resultado.cancion_buscado.Album;
                    console.log("album_sonando",this.album_sonando)
                    this.artista_sonando = resultado.cancion_buscado.Album.Artistum;
                    console.log("artista sonando",this.artista_sonando)
                 },
                 error=>{
                    console.log(error)
                 }
             )
        }

        getAlbumSonando(){
            return this.album_sonando;
        }

        getArtistaSonando(){
            return this.artista_sonando;
        }

        setArtistaSonando(artista){
            this.artista_sonando =artista;
        }

        setAlbumSonando(album){
            this.album_sonando = album;
        }

        getToken(){

			let token = localStorage.getItem("token");

			if(token!="undefined")
			{
				this.token = token;
			}
			else{
				this.token = null;
			}

			return this.token;
        }
        
        addCancionCola(cancion){
            this.cola.push(cancion);
        }

        addCancionPila(){
            this.pila.push(this.cancion_sonando)            
        }

        cancionAtras(){
            this.cola.splice(0,0,this.cancion_sonando)

            let cancion = this.pila.pop()

            this.establecerCancion(cancion)
            this.obtenerAlbumArtista(cancion.id)
        }
    }