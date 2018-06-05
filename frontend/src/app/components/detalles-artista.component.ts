
import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {UploadService} from '../services/subir.service';
import {AlbumService} from '../services/album.service';
import {IdentidadService} from '../services/identidad.service';

@Component({
  selector: 'editar-artista',
  templateUrl:'../views/artista-detalles.html',
  providers:[UserService,ArtistService,UploadService,AlbumService]
})

export class ArtistDetailsComponent implements OnInit{
  public titulo: string;
  public artista: Artista;
  public identidad;
  public token;
  public url:string;
  public mensajerecibido;
  public mensajeerror;
  public es_editar;
  public albums:any[];
  
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _artistService:ArtistService,
    private _uploadService:UploadService,
    private _albumService:AlbumService,
    public  _identidadService:IdentidadService
  ){    
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.es_editar = true;
    this.artista = new Artista('','','','');

    this.identidad = this._identidadService.identidad;

  }

  ngOnInit(){
    
    console.log("Componente de Detalles artistas");
    //LLamar al metodo api para obtener artista según id
    this.getArtista();
  }

  getArtista(){
      //Recoger el id que nos llega
      this._route.params.forEach((params:Params)=>
    {
        let id = params['id'];
        this._artistService.obtenerArtista(this.token,id).subscribe(
            response =>{
                let result:any = response;
                console.log(result);
                
                if(!result.artista_buscado){
                    this._router.navigate(['/']);
                }
                else{
                    this.artista = result.artista_buscado;
                    console.log("Artista buscado",result.artista_buscado);

                    //Obtener albumes
                    this._albumService.getAlbums(this.token,result.artista_buscado.id).subscribe(
                      response =>{
                        console.log(response);
                        let result:any = response;
                        this.albums = result.albums_buscados;
                      },
                      error=>{
                        console.log(error);
                      }
                    );
                }
                
              },
              error =>{
                //Error
                this.identidad = null;
                //Cerramos sesión
               // this.logout();
              }
        );
    });
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

  eliminarAlbum(id){
    
    var r = confirm("¿De verdad quieres eliminar este album?");
    if (r == true) {
       this._albumService.eliminarAlbum(this.token,id).subscribe(
          response =>{
              let result:any = response;
              if(!result.album_eliminado){
                alert("Error al borrar artista");
              }
              else{
                this.getArtista();
              }
              
          },
          error=>{

          }
       );
    } 
  }


  



}