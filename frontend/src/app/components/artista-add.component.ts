import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {IdentidadService} from '../services/identidad.service';

@Component({
  selector: 'add-artista',
  templateUrl:'../views/artista-add.html',
  providers:[UserService,ArtistService]
})

export class ArtistAddComponent implements OnInit{

  public titulo: string;
  public artista: Artista;
  public identidad;
  public token;
  public url:string;
  public mensajerecibido;
  public mensajeerror;
  public es_editar;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    public  _identidadService:IdentidadService
  ){
    this.titulo = 'Crear Artista';
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.artista = new Artista('','','','');

    this.identidad = this._identidadService.identidad;

    this.es_editar = null;
    if(this.identidad.rol != 'ROLE_ADMIN'){
      
      this._router.navigate(['/']);
    }

  }

  ngOnInit(){
    
    console.log("Componente de crear artistas");
    
        
  
  }

  getIdentidadPorToken(){
    this._userService.getIdentidadConToken().subscribe(
     response =>{
       let result:any = response;
      this.identidad = result.usuario;
      console.log("This.identidad", result.usuario);
      if(this.identidad.rol != "ROLE_ADMIN"){
        this._router.navigate(['/']);
      }

     },
     error =>{
       //Error
       this.identidad = null;
       //Cerramos sesión
      // this.logout();
     }
   );
  }

  addArtista(){
    console.log("El artista",this.artista);
    this._artistService.addArtista(this.token,this.artista).subscribe(
      response =>{
        let result:any = response;
        console.log(result.artista_creado.id);

        if(!result.artista_creado.id){
          this.mensajeerror = "No se ha creado, fallo en el servidor";
          
        }
        else{
          this.mensajerecibido="Se ha creado correctamente";
          this._router.navigate(['editar-artista/',result.artista_creado.id])
        }
        

      },
      error =>{
        this.mensajeerror = "No se ha creado"
      }
    );

  }



}
