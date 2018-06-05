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
  selector: 'album-editar',
  templateUrl:'../views/album-add.html',
  providers:[UserService,ArtistService,AlbumService]
})

export class AlbumEditarComponent implements OnInit{

  public titulo_apartado;
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
    this.titulo_apartado = "Editar album";
    console.log("titulo",this.titulo_apartado);
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.album = new Album('','','','', null,'');
    this.es_editar = true;

    this.identidad = this._identidadService.identidad;

    
    if(this.identidad.rol != 'ROLE_ADMIN'){
      
      this._router.navigate(['/']);
    }

  }

  ngOnInit(){
    
   
    console.log("Album editar cargado");

    //Obtenemos el album del servicio
    this.getAlbum();
   
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

  getAlbum(){
      this._route.params.forEach((params:Params)=>{
        let id = params['id'];

        this._albumService.getAlbum(this.token,id).subscribe(
            response =>{
                let result:any =response;
                console.log(result);
                if(!result.album_buscado){
                
                    this._router.navigate(['/']);
                }

                else{
                    //Obtenemos el album
                 this.album = result.album_buscado;

                }
            },
            error=>{
                this._router.navigate(['/']);
            }
        );

      });
  }

  public ficherosASubir : Array<File>;

  addAlbum(){
      this._route.params.forEach((params:Params)=>{
            let id = params['id'];
            
            console.log("Album creado",this.album);

            this._albumService.editarAlbum(this.token,this.album,id).subscribe(
                response =>{
                    let resultado:any = response;
                    if(!resultado.album_actualizado){
                        this.mensajeerror ="Hay un error";
                    }

                    else{
                        this.mensajerecibido ="El album se ha actualizado correctamente";


                        console.log(resultado.album_actualizado);
                        
                        //Subir la imagen

                        this.peticionAjaxFichero(this.url + 'subir-foto-album/' + id,[],this.ficherosASubir).then(
                            (result:any) => {
                              console.log("result",result);
                              this.album.imagen = result.imagen;
                              
                              console.log("Imagen del album", this.album.imagen);

                              console.log("ruta de imagen",this.url + 'obtener-foto-album/' + this.album.imagen)
                             
                            }
                          );
                          
                    }
                },
                error=>{
                    this.mensajeerror ="Hay un error";
                }
            );
      });
      
  }

  

  CambiarFicheroEvent(fileInput: any){
    this.ficherosASubir = <Array<File>>fileInput.target.files;
   console.log("El fichero a subir",this.ficherosASubir);

  }

  peticionAjaxFichero(url: string, params:Array<String>,files:Array<File>){
   
    var token = this.token;

    //Lanzar el código de la subida
    return new Promise(function(resolve, reject){
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0 ; i < files.length;i++){
        formData.append('image' , files[i],files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
              resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }

        }
      }

      //Lanzar petición
      xhr.open('POST', url, true);
      //le asignamos un header de Authorization
      xhr.setRequestHeader('Authorization',token);
      //Realizamos la petición con todos los datos
      xhr.send(formData);
    });
  }
}