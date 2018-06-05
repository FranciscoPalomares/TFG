import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute,Params} from '@angular/router';
import {IdentidadService} from '../services/identidad.service';
import {Artista} from '../models/artista'
import {UserService} from '../services/usuario.service';
import {ArtistService} from '../services/artista.service';
import {GLOBAL} from '../services/global';

@Component({
  selector: 'lista-artista',
  templateUrl:'../views/home.html',
  providers:[UserService,ArtistService]

})

export class HomeComponent implements OnInit{

  public titulo: string;

  public identidad;
  public token;
  public url:string;
  public artistas:Artista[];

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    public  _identidadService:IdentidadService,
    public _artistaService:ArtistService
 
  ){
    this.titulo = 'Artistas';
    this.url = GLOBAL.url;
    console.log(this.url)
    this.token = this._userService.getToken();

  }

  ngOnInit(){

    console.log("Componente de home");
    console.log("Identidad del servicio",this._identidadService.identidad)
    this.getUltimosArtistas()
  }


  getUltimosArtistas(){
    this._artistaService.ultimosArtistas(this.token).subscribe(
      response =>{
        let resultado:any=response;
        this.artistas = resultado.artistas_buscados;
        console.log(this.artistas)
      }
      ,
      error=>{
        console.log(error)
      }
    )
  }



}
