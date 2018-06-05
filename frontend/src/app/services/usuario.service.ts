import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
	export class UserService{
		public url: string;


		public identidad;
		public token;

		constructor(private http: HttpClient){
			this.url = GLOBAL.url;
		}

		signup(user_a_loguearse,gethash=null){

			if(gethash != null){
				user_a_loguearse.gethash = gethash;
			}
			let json = JSON.stringify(user_a_loguearse);

			let params = json;

			let headers = new HttpHeaders({'Content-Type':'application/json'});

			console.log("URL DE LOGIN" + this.url)

        	return this.http.post(this.url+'login', params, {headers: headers});
		}


		registrarse(user_a_registrarse){

			let json = JSON.stringify(user_a_registrarse);

			let params = json;

			let headers = new HttpHeaders({'Content-Type':'application/json'});

			console.log("URL DE LOGIN" + this.url)

        	return this.http.post(this.url+'registrarse', params, {headers: headers});


		}

		actualizar_usuario(user_a_actualizar){
			console.log("usuario_A_ACTUALIZAR desde servicio",user_a_actualizar);

			let json = JSON.stringify(user_a_actualizar);

			let params = json;

			let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': this.getToken()});

        	return this.http.put(this.url+'actualizar-usuario/'+user_a_actualizar.id, params, {headers: headers});


		}

		getIdentidad(){

			let identidad = JSON.parse(localStorage.getItem("identidad"));

			if(identidad!="undefined")
			{
				this.identidad = identidad;
			}
			else{
				this.identidad = null;
			}

			return this.identidad;
		}

		getToken(){

			let token = localStorage.getItem("token");

			if(token!="undefined")
			{
				this.token = token;
			}
			else{
				this.token = null;
			}

			return this.token;
		}

		getIdentidadConToken(){

			let token = this.getToken();

			let headers = new HttpHeaders({'Content-Type':'application/json'
			, 'Authorization': this.getToken()});

			 return this.http.get(this.url+'buscauser/', {headers: headers});



		}


		enviarEmailContrasena(email){


			let params:any = {};
			params.email = email;

			let headers = new HttpHeaders({'Content-Type':'application/json'});

        	return this.http.post(this.url+'obtener-contrasena-token/', params, {headers: headers});

		}


		determinarTokenContrasena(token){
			return this.http.get(this.url+'devolver-payload-token/' + token);
		}


		actualizarContrasena(contrasena,token){

			let password:any = {}
			password.password = contrasena;

			let json = JSON.stringify(password);

			let params = json;

			let headers = new HttpHeaders({'Content-Type':'application/json'});

			return this.http.post(this.url+'actualizar-contrasena-token/'+token, params, {headers: headers});


		}


		filtrarUsuarios(token,valor){
            let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'filtrar-usuarios/' + valor , {headers: headers});
		}
		
		infoUsuario(token,id){
			let headers =new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':token
            });

            return this.http.get(this.url+'info-usuario/' + id , {headers: headers});
		}


		eliminarToken(){
			localStorage.clear;

			location.reload();
		}

	}
