import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../services/usuario.service';
import {GLOBAL} from '../services/global';
import {Artista} from '../models/artista';
import {ArtistService} from '../services/artista.service';
import {UploadService} from '../services/subir.service';
import {IdentidadService} from '../services/identidad.service';

@Component({
  selector: 'editar-artista',
  templateUrl:'../views/artista-add.html',
  providers:[UserService,ArtistService,UploadService]
})

export class ArtistEditComponent implements OnInit{

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
    private _uploadService:UploadService,
    public  _identidadService:IdentidadService
  ){
    this.titulo = 'Editar Artista';
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.artista = new Artista('','','','');
    this.es_editar = true;

    this.identidad = this._identidadService.identidad;

    
    if(this.identidad.rol != 'ROLE_ADMIN'){
      
      this._router.navigate(['/']);
    }

  }

  ngOnInit(){

    console.log("Componente de Editar artistas");
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
                    console.log("Artista buscado",result.artista_buscado)
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

  public ficherosASubir : Array<File>;
  addArtista(){
    this._route.params.forEach((params:Params)=>
    {
        let id = params['id'];
        this._artistService.editarArtista(this.token,id,this.artista).subscribe(
            response =>{
              let resultado:any = response;
              if(!resultado.artista_actualizado){
                this.mensajeerror= "error al actualizar";
              }
              else{

                console.log("Artista actualizado",JSON.stringify(resultado.artista_actualizado[1][0]));

              }
              
              if(this.ficherosASubir){
                this.peticionAjaxFichero(this.url + 'subir-foto-artista/' + resultado.artista_actualizado[1][0].id,[],this.ficherosASubir).then(
                  (result:any) => {
                    console.log(result);
                    this.artista.imagen = result.imagen;
                    //localStorage.setItem('identidad',JSON.stringify(this.usuario_actualizar));
                    
                   
                    console.log( this.artista);
                   
                  }
                );
              }
              
               
              this.mensajerecibido ="Se ha actualizado correctamente";

                  
              },error=>{
                this.mensajeerror= "error al actualizar";
              });

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
