import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import {GLOBAL} from './global';

@Injectable()
	export class IdentidadService{
		public url: string;
        public identidad
		constructor(private http: HttpClient){
            this.url = GLOBAL.url;
            this.identidad=null;
        }

        

        establecerIdentidad(identidad_nueva){
            this.identidad = identidad_nueva;
        }
    }