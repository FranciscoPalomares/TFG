import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
export class UploadService{
	public url: string;

	constructor(private http: HttpClient){
			this.url = GLOBAL.url;
    }


    peticionAjaxFichero(url: string,files:Array<File>,token,nombre){
        var token = token;
    
        //Lanzar el código de la subida
        return new Promise(function(resolve, reject){
          var formData:any = new FormData();
          var xhr = new XMLHttpRequest();
         
          for(var i = 0 ; i < files.length;i++){
            formData.append(nombre , files[i],files[i].name);
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