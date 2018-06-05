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

export class CancionAddComponent implements OnInit{

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
    this.titulo_apartado = "Añadir canción";
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

   
  }

  creaCancion(){
   

    this._route.params.forEach((params:Params)=>{

      let album_id = params['id'];

      this.cancion.album = album_id;

      console.log(this.cancion);


      this._cancionService.crearCancion(this.token,this.cancion).subscribe(
        response =>{
          let result:any = response;
          console.log(result.cancion_creado);

          //Subir fichero de audio
          if(!this.ficherosASubir){
            this.alerterror = "Se ha subido correctamente"
          }
          else{
            this.peticionAjaxFichero(this.url + 'subir-fichero-cancion/' + result.cancion_creado.id,[],this.ficherosASubir).then(
              (result:any) => {
                console.log(result);
                this.cancion.archivo = result.archivo;
                //localStorage.setItem('identidad',JSON.stringify(this.usuario_actualizar));
                
               
                console.log( this.artista);
               
              }
            );
          }

          this._router.navigate(['editar-cancion/',result.cancion_creado.id])
        },
        error =>{
          console.log(error);
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

  public ficherosASubir : Array<File>;


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
        formData.append('cancion' , files[i],files[i].name);
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