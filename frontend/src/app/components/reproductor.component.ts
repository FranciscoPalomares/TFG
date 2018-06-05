import {Component,OnInit, ViewChild} from '@angular/core';
import {Cancion} from '../models/cancion';
import {GLOBAL} from '../services/global';
import {ColaService} from '../services/cola.service';
import { AfterViewInit,ElementRef} from '@angular/core';
import { Renderer2 } from '@angular/core';


declare var $ :any;

@Component({
    selector: 'reproductor',
    templateUrl:'../views/reproductor.html'
})



export class ReproductorComponent implements OnInit{

    public url:String;
    public song;
    public cancion:Cancion;
    public reproductor;
    public cola;

    @ViewChild("reproductor-sonoro") 
   private testElement: ElementRef;
    

    constructor(public _colaService:ColaService,private renderer: Renderer2){
        this.url = GLOBAL.url;      
        
    }

    ngOnInit(){
        console.log("Reproductor cargado");
        //Obtener reproductor del audio
        //this.reproductor = document.getElementById("reproductor-sonoro");      
        

    }

   ngAfterViewInit(){

    

    this.reproductor = document.getElementById("reproductor-sonoro");
    
    console.log("ESTE REPRODUCTOR",this.reproductor);
    
   }

    cancionTerminada(){

        this._colaService.addCancionPila()
        //Miramos la longitud de la cola
        if(this._colaService.cola.length > 0){

            //Clonamos la cola del servicio
            this.cola =  Object.assign([], this._colaService.cola);

            let nueva_cancion = this.cola[0];

            console.log("Sonará esta canción",nueva_cancion)

            //Eliminamos el primer elemento
            this.cola.shift();

            console.log("nueva cola",this.cola)

            //Establecemos la nueva cola
            this._colaService.establecerCola(this.cola);

            //Establecemos nueva canción
            this._colaService.establecerCancion(nueva_cancion);
            
            this._colaService.obtenerAlbumArtista(nueva_cancion.id)
            //Ponemos la nueva canción
            let path_archivo = this.url + '/obtener-fichero-cancion/' + nueva_cancion.archivo;
            document.getElementById("mp3-source").setAttribute("src",path_archivo);
            (document.getElementById("reproductor-sonoro") as any).load();
            (document.getElementById("reproductor-sonoro") as any).play();

            //Cambiamos el titulo de la cancion
            //document.getElementById("titulo-cancion-reproductor").innerHTML = nueva_cancion.nombre;

       }

    }
    
    verCola(){
        
        $('#myModalCola').appendTo("body").modal('show');
        console.log("cola desde el reproductor",this._colaService.cola)
    }

    eliminarCancionCola(id){
        for(var i=0; i < this._colaService.cola.length; i++) {
            if( this._colaService.cola[i].id ==id)
            {
                this._colaService.cola.splice(i,1);
              break; 
            }
          }
    }


    cancionAtras(){
        if(this._colaService.pila.length > 0){
            this._colaService.addCancionCola(this._colaService.cancion_sonando)


            this._colaService.cancionAtras()

            let nueva_cancion = this._colaService.cancion_sonando
            //Ponemos la nueva canción
            let path_archivo = this.url + '/obtener-fichero-cancion/' + nueva_cancion.archivo;
            document.getElementById("mp3-source").setAttribute("src",path_archivo);
            (document.getElementById("reproductor-sonoro") as any).load();
            (document.getElementById("reproductor-sonoro") as any).play();
            
        }
    }

      
}