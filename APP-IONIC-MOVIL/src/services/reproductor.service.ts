import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Cancion} from '../models/cancion'
import {Artista} from '../models/artista'
import {Album} from '../models/album'

import {GLOBAL} from './GLOBAL.service'
import {UsuarioService} from './usuario.service'

import { MusicControls } from '@ionic-native/music-controls';

import { Platform } from 'ionic-angular';
@Injectable()
export class ReproductorService {
     
    public cancion_sonando:Cancion;
    public artista_sonando:Artista;
    public album_sonando:Album;
    public url:String;
    public duracion;
    public cancion_sonar:any;
    public reproduciendo:Boolean
    public sonando:Boolean;
    public pila:Cancion[];

    public cola:Cancion[]
    public es_album:boolean;

    
    constructor( private http: HttpClient,private _ususarioService:UsuarioService,public plt: Platform,private musicControls: MusicControls) {
        this.cancion_sonando = null
        this.cola = []
        this.url = GLOBAL.url;
        this.duracion=-1;
        this.cancion_sonar = new Audio()
        this.pila = []
        this.es_album = false;
        this.reproduciendo=false;
    }

    establecerCancion(cancion:Cancion){
        this.cancion_sonando = cancion;
        this.duracion = cancion.duracion;
        console.log("duracion normal",this.duracion)
        console.log("duracion cancion",parseInt(this.duracion))
    }

    establecerArtista(artista:Artista){
        this.artista_sonando = artista;
    }

    establecerAlbum(album:Album){
        this.album_sonando = album;
        
    }

    playCancion(){        
        

            this.obtenerAlbumArtista(this.cancion_sonando.id)
        

        this.cancion_sonar.setAttribute("src",this.url + '/obtener-fichero-cancion/'+ this.cancion_sonando.archivo);
        this.cancion_sonar.load();
        this.seguirCancion()
        this.controlesMusica()

        this.reproduciendo=true
        this.sonando=true

        
        
    }

    

    pausarCancion(){
        this.cancion_sonar.pause();
        this.sonando=false
        this.musicControls.updateIsPlaying(false);
        this.quitarIntervalo()
    }

    seguirCancion(){
        this.cancion_sonar.play();
        this.timeout()
        this.sonando=true
        this.musicControls.updateIsPlaying(true);
    }

    establecerCola(cola_nueva){
        this.cola = cola_nueva;

        console.log("cola",this.cola)
    }

    addCancionCola(cancion){
        this.cola.push(cancion);
    }


    siguienteCancion(){

        this.pila.push(this.cancion_sonando)

        if(this.cola.length>0){
            let cancion = this.cola[0]


            this.establecerCancion(cancion)
            this.playCancion()

            for(var i=0; i < this.cola.length; i++) {
                if(this.cola[i].id ==cancion.id)
                {
                  this.cola.splice(i,1);
                  break; 
                }
              }
        }        


    }

    pasadaCancion(){


        if(this.cancion_sonar.currentTime < 10){
            
            //Añadimos la canción a la cola (la primera)
            this.cola.splice(0,0,this.cancion_sonando)

            let cancion = this.pila.pop()

            this.establecerCancion(cancion)
            this.playCancion()

        }

        else{
            this.playCancion()
        }

    }


    obtenerAlbumArtista(id){

        let headers = new HttpHeaders({'Content-Type':'application/json'
        , 'Authorization': this._ususarioService.getToken()});

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



    controlesMusica(){
        //Si es un dispositivo móvil
        if (this.plt.is('ios') || this.plt.is('android')) {
            //alert("BIEEEN")
            

            this.musicControls.destroy(); // it's the same with or without the destroy 
            this.musicControls.create({
              track       : this.cancion_sonando.nombre,        // optional, default : ''
              artist      : this.artista_sonando.nombre,                       // optional, default : ''
              cover       : this.url + 'obtener-foto-album/' + this.album_sonando.imagen,      // optional, default : nothing
              // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
              //           or a remote url ('http://...', 'https://...', 'ftp://...')
              isPlaying   : true,                         // optional, default : true
              dismissable : true,                         // optional, default : false

              // hide previous/next/close buttons:
              hasPrev   : true,      // show previous button, optional, default: true
              hasNext   : true,      // show next button, optional, default: true
              hasClose  : false,       // show close button, optional, default: false

           
              // Android only, optional
              
                // text displayed in the status bar when the notification (and the ticker) are updated, optional
                ticker    : 'Ahora sonando:'+this.cancion_sonando.nombre,
                // All icons default to their built-in android equivalents
                // The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders
                playIcon: 'media_play',
                pauseIcon: 'media_pause',
                prevIcon: 'media_prev',
                nextIcon: 'media_next',
                closeIcon: 'media_close',
                notificationIcon: 'notification'
             });
             this.musicControls.subscribe().subscribe(action => {
                 //function events(action) {
                  //console.log('action', action);
                  // const message = JSON.parse(action).message;
                  const message = JSON.parse(action).message;
                        //alert(message)
                       switch(message) {
                           case 'music-controls-next':
                               // Do something
                               this.siguienteCancion()
                               break;
                           case 'music-controls-previous':
                               // Do something
                               this.pasadaCancion()
                               break;
                           case 'music-controls-pause':
                               // Do something
                               console.log('musc pause');
                               this.pausarCancion()
                               this.musicControls.updateIsPlaying(false);
                               break;
                           case 'music-controls-play':
                               // Do something
                               console.log('music play');
                               this.seguirCancion()
                               this.musicControls.updateIsPlaying(true);
                               break;
                           case 'music-controls-destroy':
                               // Do something
                               break;
                          // External controls (iOS only)
                          case 'music-controls-toggle-play-pause' :
                            // Do something
                            break;
                          case 'music-controls-seek-to':
                            // Do something
                            break;
                          case 'music-controls-skip-forward':
                            // Do something
                            this.siguienteCancion()
                            break;
                          case 'music-controls-skip-backward':
                            // Do something
                            this.pasadaCancion()
                            break;

                            // Headset events (Android only)
                            // All media button events are listed below
                            case 'music-controls-media-button' :
                                // Do something
                                break;
                            case 'music-controls-headset-unplugged':
                                // Do something
                                break;
                            case 'music-controls-headset-plugged':
                                // Do something
                                break;

                            default:
                                break;
                        }

                       // this.musicControls.listen();
                  // }

                   //this.musicControls.subscribe()
                   
                  
            });

            
            this.musicControls.listen(); // activates the observable above

            this.musicControls.updateIsPlaying(true);
            

          
        }


    }
    eliminarCancionCola(id){
        for(var i=0; i < this.cola.length; i++) {
            if( this.cola[i].id ==id)
            {
                this.cola.splice(i,1);
              break; 
            }
          }
    }


    updateDuracion(){
   
        this.duracion = this.cancion_sonar.currentTime
        let resta = this.cancion_sonar.duration - this.duracion
        console.log("resta desde intervalo",resta)
        if(resta < 1){
            
          this.siguienteCancion()
        }
      }



      public intervalo

      timeout(){
          console.log("poner intervalo")
               this.intervalo = setInterval(() => { 
                      this.updateDuracion()
                 }, 1000);
      }

      quitarIntervalo(){
        clearInterval(this.intervalo);
      }



}