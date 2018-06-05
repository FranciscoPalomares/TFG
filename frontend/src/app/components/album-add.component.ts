import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {Album} from '../models/album';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';


@Component({
  selector: 'album-add',
  templateUrl:'../views/album-add.html',
  providers:[UserService,ArtistService,AlbumService]
})

export class AlbumAddComponent implements OnInit{

  public titulo_apartado: string;
  public artistas: Artista;
  public album:Album;
  public identidad;
  public token;
  public url:string;
  public alerterror:string;
  public es_editar;
  public mensajerecibido;
  public mensajeerror;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    private _albumService:AlbumService,
    public  _identidadService:IdentidadService
  ){
    this.titulo_apartado = "Crear nuevo album";
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.album = new Album('','','','',2017,'');
    this.identidad = this._identidadService.identidad;
    this.es_editar = null;
    this.mensajerecibido = null;
    this.mensajeerror = null;

    console.log("identidad de add album",this.identidad);
    if(this.identidad.rol != 'ROLE_ADMIN'){
      
      this._router.navigate(['/']);
    }
  }

  ngOnInit(){
    console.log("Album add cargado");
   
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
  addAlbum(){
      this._route.params.forEach((params:Params)=>{
            let artista_id = params['artista'];
            this.album.id_artista =artista_id;
            console.log("Album creado",this.album);

            this._albumService.addAlbum(this.token,this.album).subscribe(
                response =>{
                    let result:any =response;
                    if(!result.album_creado){
                        this.alerterror ="Hay un error";
                        this._router.navigate(['/']);
                    }

                    else{
                      this._router.navigate(['editar-album/',result.album_creado.id])
                    }
                },
                error=>{
                    this.alerterror ="Hay un error";
                }
            );
      });
      
  }
}