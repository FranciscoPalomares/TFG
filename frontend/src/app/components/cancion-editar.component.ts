import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {Album} from '../models/album';
import {Cancion} from '../models/cancion';
import {AlbumService} from '../services/album.service';
import {CancionService} from '../services/cancion.service';
import {IdentidadService} from '../services/identidad.service';


@Component({
  selector: 'cancion-add',
  templateUrl:'../views/cancion-add.html',
  providers:[UserService,ArtistService,AlbumService,CancionService]
})

export class CancionEditarComponent implements OnInit{

  public titulo_apartado;
  public album:Album;
  public identidad;
  public token;
  public url:string;
  public alerterror:string;
  public es_editar;
  public mensajerecibido;
  public mensajeerror;
  public artista:Artista;
  public cancion:Cancion;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    private _albumService:AlbumService,
    private _cancionService:CancionService,
    public  _identidadService:IdentidadService
  ){
    this.titulo_apartado = "Editar canción";
    console.log("titulo",this.titulo_apartado);
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.cancion = new Cancion('',null,'','','', '');
    this.es_editar = true;

    this.identidad = this._identidadService.identidad;

    
    if(this.identidad.rol != 'ROLE_ADMIN'){
      
      this._router.navigate(['/']);
    }

  }

  ngOnInit(){

    console.log("Album editar cargado");

    this.getCancion();

   
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

  getCancion(){
    this._route.params.forEach((params:Params)=>{

        let id = params['id'];

      this._cancionService.getCancion(this.token,id).subscribe(
          response =>{
           let  result : any = response;

           this.cancion = result.cancion_buscado;

           console.log("cancion editar",this.cancion);

            
          },
          error =>{

          }
      );
  });


  
  }
  creaCancion(){
    console.log("GUAY")
  }

  CambiarFicheroEvent(fileInput: any){
    

  }

}