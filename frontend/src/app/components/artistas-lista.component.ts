import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {IdentidadService} from '../services/identidad.service';

@Component({
  selector: 'lista-artista',
  templateUrl:'../views/lista-artistas.html',
  providers:[UserService,ArtistService]
})

export class ArtistListComponent implements OnInit{

  public titulo: string;
  public artistas: Artista[];
  public identidad;
  public token;
  public url:string;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    public  _identidadService:IdentidadService
  ){
    this.titulo = 'Artistas';
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;

    this.identidad = this._identidadService.identidad;

  }

  ngOnInit(){
   
    console.log("Componente de lista de artistas");
    this.getArtistas();
  }

  getIdentidadPorToken(){
    this._userService.getIdentidadConToken().subscribe(
     response =>{
       let result:any = response;
      this.identidad = result.usuario;
      console.log("This.identidad", result.usuario);

     },
     error =>{
       //Error
       this.identidad = null;
       //Cerramos sesión
      // this.logout();
     }
   );
  }

  getArtistas(){
    this._artistService.obtenerArtistas(this.token).subscribe(
      response =>{
        let result:any = response;
       this.artistas = result.artistas_buscados;
       console.log("Artistas buscados",this.artistas);
       
 
      },
      error =>{
        //Error
        this.identidad = null;
        //Cerramos sesión
       // this.logout();
      }
    );
  }

  eliminarArtista(id){
    
    var r = confirm("¿De verdad quieres eliminar este artista?");
    if (r == true) {
       this._artistService.eliminarArtista(this.token,id).subscribe(
          response =>{
              let result:any = response;
              if(!result.artista_eliminado){
                alert("Error al borrar artista");
              }
              else{
                this.getArtistas();
              }
              
          },
          error=>{

          }
       );
    } 
  }



}
