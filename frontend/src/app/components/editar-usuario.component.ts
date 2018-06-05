import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/usuario.service';
import {Usuario} from '../models/usuario';
import {GLOBAL} from '../services/global';
import {IdentidadService} from '../services/identidad.service';


@Component({
  selector: 'editar-usuario',
  templateUrl: '../views/editar-usuario.html',
  providers: [UserService]
})

export class EditarUsuarioComponent implements OnInit{

  public titulo:string;
  public usuario_actualizar:Usuario;
  public identidad;
  public token;
  public mensajeerror;
  public mensajerecibido;
  public url;

  constructor(
    private _userService: UserService,
    public  _identidadService:IdentidadService
  ){
    this.titulo = "Actualizar mis datos";
    this.token = this._userService.getToken();


    //this.usuario_actualizar =   this.identidad;
    this.url = GLOBAL.url;

    

    console.log("usuario_Actualizar",this.usuario_actualizar);


  }

  ngOnInit(){

    this.getIdentidadPorToken();
    console.log("Funcionando componente de editar");
    
    this.usuario_actualizar = this.identidad;
  }

  onSubmit(){

  this._userService.actualizar_usuario(this.usuario_actualizar).subscribe(
    response =>{
        let result:any = response;
        if(!result.usuario_actualizado){
          this.mensajeerror= "error al actualizar";
        }
        else{

          console.log(JSON.stringify(result.usuario_actualizado[1][0]));
          this.identidad =result.usuario_actualizado[1][0];
          this.usuario_actualizar = this.identidad;
          //localStorage.setItem('identidad',JSON.stringify(result.usuario_actualizado[1][0]));
          this._identidadService.establecerIdentidad(this.identidad);
          //document.getElementById("nombre_de_usuario").innerHTML = this.usuario_actualizar.nombre;
          this.mensajeerror = null;


          if(!this.ficherosASubir){
            //Redireccionamos
          }
          else{
            this.peticionAjaxFichero(this.url + 'subir-foto-perfil/' + result.usuario_actualizado[1][0].id,[],this.ficherosASubir).then(
              (result:any) => {
                this.usuario_actualizar.imagen = result.imagen;
                //localStorage.setItem('identidad',JSON.stringify(this.usuario_actualizar));
                let ruta_fichero_imagen = this.url + 'obtener-foto-perfil/' + this.usuario_actualizar.imagen;
                console.log(ruta_fichero_imagen);
                document.getElementById("imagen_usuario").setAttribute('src',ruta_fichero_imagen);
                console.log(this.usuario_actualizar);
                console.log(this.url + '/obtener-foto-perfil/' +this.usuario_actualizar.imagen);
              }
            );
          }
            this.mensajerecibido= "Se ha actualizado correctamente";
        }



    },
    error => {
      console.log(error);
      this.mensajerecibido=null;
      var mensaje =<any> error;
        //console.log(error.message);
      if(mensaje !=null){
        //var body = JSON.parse(error._body);
        this.mensajeerror= "error al actualizar";
        //console.log(error);
      }
    }
  );

  }


  public ficherosASubir : Array<File>;

  CambiarFicheroEvent(fileInput: any){
    this.ficherosASubir = <Array<File>>fileInput.target.files;
   console.log(this.ficherosASubir);

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

  public getIdentidadPorToken(){
    this._userService.getIdentidadConToken().subscribe(
     response =>{
       let result:any = response;
      this.identidad = result.usuario;
      this.usuario_actualizar = this.identidad;
      console.log("This.identidad", result.usuario);

     },
     error =>{
       this.identidad = null;
     }
   );
  }

}
