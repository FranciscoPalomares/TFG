webpackJsonp([13],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artista_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artista_artista__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistasPage = /** @class */ (function () {
    function ArtistasPage(navCtrl, navParams, _artistasService, _usuarioService, _ServicioReproductor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._artistasService = _artistasService;
        this._usuarioService = _usuarioService;
        this._ServicioReproductor = _ServicioReproductor;
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_GLOBAL_service__["a" /* GLOBAL */].url;
    }
    ArtistasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArtistasPage');
        this.token = this._usuarioService.getToken();
        this.getArtistas();
    };
    ArtistasPage.prototype.getArtistas = function () {
        var _this = this;
        this._artistasService.obtenerArtistas(this.token).subscribe(function (response) {
            console.log(response);
            var resultado = response;
            _this.artistas = resultado.artistas_buscados;
        });
    };
    ArtistasPage.prototype.irArtista = function (artista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__artista_artista__["a" /* ArtistaPage */], {
            'id': artista.id
        });
    };
    ArtistasPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getArtistas();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ArtistasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artistas',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\artistas\artistas.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Artistas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-style">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n    <ion-list  [virtualScroll]="artistas">\n        <ion-item class="bg-style" *virtualItem="let artista" (click)="irArtista(artista)">       \n            \n               \n                    <ion-avatar item-start>\n                        <img class="imagen"src="{{url+\'obtener-foto-artista/\' + artista.imagen}}" >\n                    </ion-avatar>\n                    <h2>{{artista.nombre}}</h2>\n                    <p>{{artista.descripcion}}</p>\n                \n        </ion-item>\n      </ion-list>\n\n      <div style="padding-bottom:5.6rem;">\n\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\artistas\artistas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_artista_service__["a" /* ArtistaService */], __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__services_reproductor_service__["a" /* ReproductorService */]])
    ], ArtistasPage);
    return ArtistasPage;
}());

//# sourceMappingURL=artistas.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_album_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cancion_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artista_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_playlist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artista_artista__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__playlist_playlist__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__album_album__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__usuario_usuario__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lista_playlists_lista_playlists__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicios







//Paginas








var BuscarPage = /** @class */ (function () {
    function BuscarPage(navCtrl, navParams, _albumService, _cancionService, _artistaService, _playlistService, _usuarioService, _ServicioReproductor, actionSheetCtrl, popoverCtrl, changeDetector) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._albumService = _albumService;
        this._cancionService = _cancionService;
        this._artistaService = _artistaService;
        this._playlistService = _playlistService;
        this._usuarioService = _usuarioService;
        this._ServicioReproductor = _ServicioReproductor;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.changeDetector = changeDetector;
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_7__services_GLOBAL_service__["a" /* GLOBAL */].url;
        this.reproduciendo = false;
    }
    BuscarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarPage');
    };
    BuscarPage.prototype.buscar = function (searchbar) {
        console.log(searchbar.srcElement.value);
        var valor = searchbar.srcElement.value;
        if (valor != undefined) {
            this.filtrarAlbumes(valor);
            this.filtrarArtistas(valor);
            this.filtrarCanciones(valor);
            this.filtrarPlaylists(valor);
            this.filtrarUsuarios(valor);
        }
    };
    BuscarPage.prototype.filtrarAlbumes = function (valor) {
        var _this = this;
        this._albumService.filtrarAlbumes(this.token, valor).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.albumes = resultado.albumes_buscados;
        });
    };
    BuscarPage.prototype.filtrarArtistas = function (valor) {
        var _this = this;
        this._artistaService.filtrarPlaylists(this.token, valor).subscribe(function (response) {
            var resultado = response;
            _this.artistas = resultado.artistas_buscados;
        });
    };
    BuscarPage.prototype.filtrarCanciones = function (valor) {
        var _this = this;
        this._cancionService.filtrarCanciones(this.token, valor).subscribe(function (response) {
            var resultado = response;
            _this.canciones = resultado.canciones_buscados;
            console.log("canciones buscadas", _this.canciones);
        });
    };
    BuscarPage.prototype.filtrarPlaylists = function (valor) {
        var _this = this;
        this._playlistService.filtrarPlaylists(this.token, valor).subscribe(function (response) {
            var resultado = response;
            _this.playlists = resultado.playlists_buscados;
        });
    };
    BuscarPage.prototype.filtrarUsuarios = function (valor) {
        var _this = this;
        this._usuarioService.filtrarUsuarios(this.token, valor).subscribe(function (response) {
            var resultado = response;
            _this.usuarios = resultado.usuarios_buscados;
        });
    };
    BuscarPage.prototype.irAlbum = function (album) {
        console.log("Album a ir", album);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__album_album__["a" /* AlbumPage */], {
            'id': album.id
        });
    };
    BuscarPage.prototype.irArtista = function (artista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__artista_artista__["a" /* ArtistaPage */], {
            'id': artista.id
        });
    };
    BuscarPage.prototype.irPlaylist = function (playlist) {
        console.log(" Playlist a ir", playlist);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__playlist_playlist__["a" /* PlaylistPage */], {
            'id': playlist.id
        });
    };
    BuscarPage.prototype.irUsuario = function (usuario) {
        console.log(" Usuario a ir", usuario);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__usuario_usuario__["a" /* UsuarioPage */], {
            'usuario': usuario
        });
    };
    BuscarPage.prototype.opciones = function (cancion) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: cancion.nombre,
            buttons: [
                {
                    text: 'Añadir a cola',
                    role: 'destructive',
                    handler: function () {
                        _this._ServicioReproductor.addCancionCola(cancion);
                    }
                },
                {
                    text: 'Añadir a Playlist',
                    handler: function () {
                        var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_13__lista_playlists_lista_playlists__["a" /* ListaPlaylistsPage */], {
                            'cancion': cancion
                        });
                        popover.present({});
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    BuscarPage.prototype.primeraMayuscula = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    BuscarPage.prototype.reproducirCancion = function (cancion) {
        this._ServicioReproductor.reproduciendo = true;
        this._ServicioReproductor.sonando = true;
        this.reproduciendo = true;
        this.changeDetector.detectChanges();
        this._ServicioReproductor.establecerCancion(cancion);
        //this._ServicioReproductor.establecerArtista(this.artista)
        //this._reproductorService.establecerAlbum(this.album)
        this._ServicioReproductor.playCancion();
        this.administrarColaCanciones(cancion);
    };
    BuscarPage.prototype.addCancionCola = function (cancion) {
        this._ServicioReproductor.addCancionCola(cancion);
    };
    BuscarPage.prototype.administrarColaCanciones = function (cancion) {
        this.cola = Object.assign([], this.canciones);
        for (var i = 0; i < this.cola.length; i++) {
            if (this.cola[i].id == cancion.id) {
                this.cola.splice(i, 1);
                break;
            }
        }
        this._ServicioReproductor.establecerCola(this.cola);
    };
    BuscarPage.prototype.compararCancion = function (id) {
        if (!this._ServicioReproductor.cancion_sonando)
            return false;
        else
            return id == this._ServicioReproductor.cancion_sonando.id;
    };
    BuscarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\buscar\buscar.html"*/'\n<ion-header class="bg-style">\n\n    <ion-searchbar placeholder="Busca..." (ionInput)="buscar($event)">\n    \n        \n        \n      </ion-searchbar>\n   \n\n</ion-header>\n\n\n<ion-content padding class="bg-style">\n\n  <ion-list *ngIf="albumes && albumes.length >0" >\n\n    <h1>Álbumes:</h1>\n    <ion-item class="bg-style" *ngFor="let album of albumes" (click)="irAlbum(album)" detail-push>\n        <ion-avatar item-start>\n            <img class="imagen" src="{{url+\'obtener-foto-album/\' + album.imagen}}" >\n        </ion-avatar>\n      {{album.titulo}}\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="canciones && canciones.length >0" >\n\n      <h1>Canciones:</h1>\n      <ion-item  class="bg-style" *ngFor="let cancion of canciones"  [ngStyle]="{\n        \'color\': compararCancion(cancion.id) ? \'red\':\'white\'\n    }">\n          <ion-icon item-left ion-left name="ios-play" (click)="reproducirCancion(cancion)"></ion-icon>\n          <div text-center><strong>{{primeraMayuscula(cancion.nombre)}}</strong> - &nbsp;{{cancion.duracion}}</div> \n          <ion-icon item-right ion-right (click)="opciones(cancion)"name="ios-more"></ion-icon>\n  \n        </ion-item>\n  \n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="artistas && artistas.length >0" >\n\n      <h1>Artistas:</h1>\n      <ion-item class="bg-style" *ngFor="let artista of artistas" (click)="irArtista(artista)" detail-push>\n          <ion-avatar item-start>\n              <img class="imagen" src="{{url+\'obtener-foto-artista/\' + artista.imagen}}" >\n          </ion-avatar>\n        {{artista.nombre}}\n      </ion-item>\n  \n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="playlists && playlists.length >0" >\n\n      <h1>Playlists:</h1>\n      <ion-item class="bg-style" *ngFor="let playlist of playlists" (click)="irPlaylist(playlist)" detail-push>\n        {{playlist.nombre}}\n      </ion-item>\n  \n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="usuarios && usuarios.length >0" >\n\n    <h1>Usuarios:</h1>\n    <ion-item  class="bg-style"*ngFor="let usuario of usuarios" (click)="irUsuario(usuario)" detail-push>\n        <ion-avatar item-start>\n            <img  class="imagen" *ngIf="usuario.imagen"src="{{url+\'obtener-foto-perfil/\' + usuario.imagen}}" >\n      \n          </ion-avatar>\n\n          <ion-icon  item-start *ngIf="!usuario.imagen" name="ios-contact"></ion-icon>\n      {{usuario.nombre}} {{usuario.apellidos}} \n    </ion-item>\n\n</ion-list>\n\n<div style="padding-bottom:5.6rem;">\n\n    </div>\n\n\n</ion-content>\n    \n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\buscar\buscar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_3__services_cancion_service__["a" /* CancionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_artista_service__["a" /* ArtistaService */], __WEBPACK_IMPORTED_MODULE_5__services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_8__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], BuscarPage);
    return BuscarPage;
}());

//# sourceMappingURL=buscar.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_playlist_playlist__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(navCtrl, navParams, _usuarioService, _playlistService, _ServicioReproductor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._playlistService = _playlistService;
        this._ServicioReproductor = _ServicioReproductor;
        this.usuario = navParams.get('usuario');
        this.id = this.usuario.id;
        this.token = _usuarioService.getToken();
    }
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioPage');
        this.getPlaylistsCreadas();
        this.getPlaylistsSeguidas();
    };
    UsuarioPage.prototype.getPlaylistsCreadas = function () {
        var _this = this;
        this._playlistService.obtenerPlaylistsCreadasUsuario(this.token, this.id).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.playlists_creadas = resultado.playlists_buscados;
        });
    };
    UsuarioPage.prototype.getPlaylistsSeguidas = function () {
        var _this = this;
        this._playlistService.obtenerPlaylistsSeguidasUsuario(this.token, this.id).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.playlists_seguidas = resultado.playlists_buscados;
        });
    };
    UsuarioPage.prototype.irPlaylist = function (playlist) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_playlist_playlist__["a" /* PlaylistPage */], {
            'id': playlist.id
        });
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\usuario\usuario.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="usuario">{{usuario.nombre}} {{usuario.apellidos}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-style">\n\n  <div class="bg-style" *ngIf="playlists_creadas && playlists_creadas.length <1 && playlists_seguidas && playlists_seguidas.length <1">\n    <h1>No tiene playlists</h1>\n  </div>\n  <ion-list class="bg-style" *ngIf="playlists_creadas && playlists_creadas.length >0">\n    <h1 text-center>Playlists creadas:</h1>\n\n    <ion-item class="bg-style" *ngFor="let playlist of playlists_creadas" (click)="irPlaylist(playlist)" detail-push>\n      {{playlist.nombre}}\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="playlists_seguidas && playlists_seguidas.length >0">\n    <h1 text-center>Playlists seguidas:</h1>\n\n    <ion-item class="bg-style"  *ngFor="let playlist_seguida of playlists_seguidas" (click)="irPlaylist(playlist_seguida)" detail-push >\n      {{playlist_seguida.nombre}}\n      \n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\usuario\usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__["a" /* ReproductorService */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
    }
    UsuarioService.prototype.login = function (user_a_loguearse, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_a_loguearse.gethash = gethash;
        }
        var json = JSON.stringify(user_a_loguearse);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'login', params, { headers: headers });
    };
    UsuarioService.prototype.registrarse = function (user_a_registrarse) {
        var json = JSON.stringify(user_a_registrarse);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'registrarse', params, { headers: headers });
    };
    UsuarioService.prototype.actualizar_usuario = function (user_a_actualizar) {
        console.log("usuario_A_ACTUALIZAR desde servicio", user_a_actualizar);
        var json = JSON.stringify(user_a_actualizar);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': this.getToken() });
        return this.http.put(this.url + 'actualizar-usuario/' + user_a_actualizar.id, params, { headers: headers });
    };
    UsuarioService.prototype.getIdentidad = function () {
        var identidad = JSON.parse(localStorage.getItem("identidad"));
        if (identidad != "undefined") {
            this.identidad = identidad;
        }
        else {
            this.identidad = null;
        }
        return this.identidad;
    };
    UsuarioService.prototype.getToken = function () {
        var token = localStorage.getItem("token");
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UsuarioService.prototype.getIdentidadConToken = function () {
        var token = this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': this.getToken() });
        return this.http.get(this.url + 'buscauser/', { headers: headers });
    };
    UsuarioService.prototype.enviarEmailContrasena = function (email) {
        var params = {};
        params.email = email;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'obtener-contrasena-token/', params, { headers: headers });
    };
    UsuarioService.prototype.determinarTokenContrasena = function (token) {
        return this.http.get(this.url + 'devolver-payload-token/' + token);
    };
    UsuarioService.prototype.actualizarContrasena = function (contrasena, token) {
        var password = {};
        password.password = contrasena;
        var json = JSON.stringify(password);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + 'actualizar-contrasena-token/' + token, params, { headers: headers });
    };
    UsuarioService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UsuarioService.prototype.filtrarUsuarios = function (token, valor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'filtrar-usuarios/' + valor, { headers: headers });
    };
    UsuarioService.prototype.cerrarSesion = function () {
        localStorage.removeItem("token");
    };
    UsuarioService.prototype.refrescarToken = function () {
        this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this.http.get(this.url + 'refrescar-token/', { headers: headers });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DatosPage = /** @class */ (function () {
    function DatosPage(navCtrl, navParams, _usuarioService, _app, toastCtrl, _ServicioReproductor, camera, transfer, actionSheet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._app = _app;
        this.toastCtrl = toastCtrl;
        this._ServicioReproductor = _ServicioReproductor;
        this.camera = camera;
        this.transfer = transfer;
        this.actionSheet = actionSheet;
        this.token = _usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__["a" /* GLOBAL */].url;
    }
    DatosPage.prototype.ionViewDidLoad = function () {
        this.getIdentidadToken();
    };
    DatosPage.prototype.getIdentidadToken = function () {
        var _this = this;
        this._usuarioService.getIdentidadConToken().subscribe(function (response) {
            var result = response;
            _this.identidad = result.usuario;
            console.log(_this.identidad);
            _this.usuario = _this.identidad;
            console.log(_this.usuario);
        });
    };
    DatosPage.prototype.cerrarSesion = function () {
        this._usuarioService.cerrarSesion();
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    DatosPage.prototype.senialarGrupo = function (tipo) {
        if (tipo == this.tipo) {
            console.log("son iguales");
            this.tipo = null;
        }
        else
            this.tipo = tipo;
    };
    DatosPage.prototype.comprobarGrupo = function (tipo) {
        if (tipo == this.tipo)
            return true;
        else
            return false;
    };
    DatosPage.prototype.actualizarUsuario = function () {
        var _this = this;
        console.log(this.usuario);
        if (this.usuario.nombre.length > 0 && this.usuario.apellidos.length > 0) {
            this._usuarioService.actualizar_usuario(this.usuario).subscribe(function (response) {
                var resultado = response;
                console.log("Usuario actualizado", resultado);
                _this.usuario = resultado.usuario_actualizado[1][0];
                var toast = _this.toastCtrl.create({
                    message: 'Se ha actualizado correctamente',
                    duration: 3000,
                    position: 'top',
                    cssClass: "toast-success"
                });
                toast.present();
            }, function (error) {
                console.log(error);
                var toast = _this.toastCtrl.create({
                    message: 'Ha habido un error al actualizar',
                    duration: 3000,
                    position: 'top',
                    cssClass: "toast-error"
                });
                toast.present();
            });
        }
        else {
            alert("Los campos son obligatorios");
        }
    };
    DatosPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.uri = imageData;
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.photos.push(this.base64Image);
            //this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    DatosPage.prototype.deGaleria = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (imageData) {
            _this.uri = imageData;
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.photos.push(this.base64Image);
            //this.photos.reverse();
        }, function (err) { return console.log(err); });
    };
    DatosPage.prototype.subirFoto = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var apiUrl = this.url + 'subir-foto-perfil/' + this.identidad.id;
        var options = {
            fileKey: 'image',
            fileName: 'name.jpg',
            headers: { 'Authorization': this.token }
        };
        fileTransfer.upload(this.uri, apiUrl, options)
            .then(function (data) {
            // success
            //Mostrar mensaje que que ha sido subida con exito
            var resultado = data;
            _this.usuario.imagen = resultado.imagen;
            _this.presentToast("Se ha actualizado correctamente");
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (err) {
            // error
            alert(err.message);
        });
    };
    DatosPage.prototype.presentToast = function (texto) {
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DatosPage.prototype.obtenerFoto = function () {
        var _this = this;
        var buttonLabels = ['Desde cámara', 'Desde galería'];
        var opciones = {
            title: 'Elie opción para obtener foto',
            subtitle: 'Elige una opción:',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancelar',
            addDestructiveButtonWithLabel: 'Cancelar',
            //androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
            androidTheme: 5,
            destructiveButtonLast: true
        };
        this.actionSheet.show(opciones).then(function (buttonIndex) {
            console.log('Button pressed: ' + buttonIndex);
            switch (buttonIndex) {
                case 1:
                    _this.takePhoto();
                    break;
                case 2:
                    _this.deGaleria();
                    break;
            }
        });
    };
    DatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datos',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\datos\datos.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fondo">\n\n  <div  *ngIf="usuario" class="fondo">\n  <ion-avatar *ngIf="usuario.imagen">\n    <img  src="{{url + \'/obtener-foto-perfil/\' + usuario.imagen}}" style="height: 50vh;\n    width: auto;\n    margin: auto;\n    display: block;">\n  </ion-avatar>\n  </div>\n\n  <div *ngIf="usuario" center text-center class="fondo">\n    <ion-avatar *ngIf="!usuario.imagen">\n      <ion-icon style="font-size: 400% !important;" ios="ios-contact" md="md-contact"></ion-icon>\n    </ion-avatar>\n\n    <br>\n    <p *ngIf="!usuario.imagen">No tienes imagen :(</p>\n    </div>\n\n    <div text-center *ngIf="usuario" class="fondo">\n      <h2>\n        {{usuario.nombre}} {{usuario.apellidos}}\n      </h2>\n    </div>\n  \n    <div center text-center class="fondo">\n    <button ion-button round outline color="danger" (click)="cerrarSesion()">Cerrar sesión &nbsp; <ion-icon ios="ios-exit" md="md-exit"></ion-icon></button>\n  </div>\n\n    <ion-list class="fondo">\n\n      <ion-item class="fondo" (click)=" senialarGrupo(\'datos\')">\n\n        <h3>\n          Cambia tus datos      \n\n        </h3>\n\n        <ion-icon  item-right [name]="comprobarGrupo(\'datos\') ? \'ios-arrow-round-down\' : \'ios-arrow-round-forward\'"></ion-icon>\n\n        \n\n      </ion-item>\n\n      <ion-item class="fondo" (click)=" senialarGrupo(\'imagen\')"> \n        <h3>\n          Cambia tu imagen\n        \n        </h3>\n\n        <ion-icon  item-right [name]="comprobarGrupo(\'imagen\') ? \'ios-arrow-round-down\' : \'ios-arrow-round-forward\'"></ion-icon>\n\n        \n      </ion-item>\n\n\n    </ion-list>\n\n\n    <div class="fondo" *ngIf="comprobarGrupo(\'datos\')">\n      <h2>Cambia tus datos:</h2>\n\n      <form (ngSubmit)="actualizarUsuario()">\n          <ion-item class="fondo">\n            <ion-label stacked>Nombre:</ion-label>\n            <ion-input type="text" [(ngModel)]="usuario.nombre" name="nombre" required></ion-input>\n          </ion-item>\n          <ion-item class="fondo">\n            <ion-label stacked>Apellidos</ion-label>\n            <ion-input type="text"[(ngModel)]="usuario.apellidos" name="apellidos" required></ion-input>\n          </ion-item>\n          <button ion-button type="submit" [disabled]="usuario.nombre.length==0 && usuario.apellidos.length==0" round block outline>Actualizar usuario</button>\n        </form>\n    </div>\n\n    <div class="fondo" *ngIf="comprobarGrupo(\'imagen\')">\n      <h2>Cambia tu imagen:</h2>\n\n\n      <button ion-button full (click)="obtenerFoto()" >\n        <ion-icon name="camera"></ion-icon>&nbsp;Obtener foto\n        </button>\n\n\n\n      <div *ngIf="uri">\n        <img [src]="uri" style="height: 50vh;\n        width: auto;\n        margin: auto;\n        display: block;" />\n\n        <button ion-button full color="secondary" text-center (click)="subirFoto()"> \n            <ion-icon ios="ios-cloud-upload" md="md-cloud-upload"></ion-icon>\n            Subir foto\n          </button> \n      </div>\n      \n\n    </div>\n    \n  \n    <div style="padding-bottom:5.6rem;">\n\n    </div>\n  \n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\datos\datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__["a" /* ActionSheet */]])
    ], DatosPage);
    return DatosPage;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_usuario__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Modelo Usuario

//Servicios

var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, formBuilder, toastCtrl, _userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this._userService = _userService;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__models_usuario__["a" /* Usuario */]('', '', '', '', '', '', '');
        this.todo = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellidos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        }, { validator: this.matchingPasswords('password', 'confirmPassword') });
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    RegistroPage.prototype.registrarse = function () {
        var _this = this;
        this.usuario.nombre = this.todo.controls.nombre.value;
        this.usuario.apellidos = this.todo.controls.apellidos.value;
        this.usuario.email = this.todo.controls.email.value;
        this.usuario.password = this.todo.controls.password.value;
        this._userService.registrarse(this.usuario).subscribe(function (response) {
            var toast = _this.toastCtrl.create({
                message: 'El usuario se ha creado',
                duration: 5000,
                position: 'top'
            });
            toast.present();
            _this.navCtrl.pop();
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'El usuario no se ha creado correctamente, puede ser que el email esté registrado',
                duration: 8000,
                position: 'top'
            });
            toast.present();
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\registro\registro.html"*/'\n<ion-header no-border>\n    <ion-navbar transparent >\n      \n      \n     \n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      <h2 center class="titulo" text-center>Registro</h2>\n      <form   [formGroup]="todo">\n          <ion-row>\n            <ion-col>\n              <ion-list inset>\n\n\n                  <ion-item>\n                      <ion-input type="text" formControlName="nombre" placeholder="Nombre:" name="nombre"  required></ion-input>\n                    </ion-item>\n                \n                    <ion-item>\n                        <ion-input type="text" formControlName="apellidos" placeholder="Apellidos:" name="apellidos"  required></ion-input>\n                      </ion-item>\n                <ion-item>\n                  <ion-input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" formControlName="email" placeholder="Email" name="email"  required></ion-input>\n                </ion-item>\n                \n                <ion-item>\n                  <ion-input type="password" formControlName="password" placeholder="Contraseña" name="password"  required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input type="password" formControlName="confirmPassword" placeholder="Repita contraseña" name="confirmarpassword"  required></ion-input>\n                  </ion-item>\n                \n              </ion-list>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col class="signup-col">\n              <button ion-button class="submit-btn" full type="submit" [disabled]="!todo.valid" (click)="registrarse()" >Crear cuenta</button>\n            </ion-col>\n          </ion-row>\n\n          \n        </form>\n  </ion-content>'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_playlist__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_playlist_playlist__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlaylistsPage = /** @class */ (function () {
    function PlaylistsPage(navCtrl, navParams, _playlistService, _usuarioService, _ServicioReproductor, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._playlistService = _playlistService;
        this._usuarioService = _usuarioService;
        this._ServicioReproductor = _ServicioReproductor;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.token = _usuarioService.getToken();
    }
    PlaylistsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad PlaylistsPage');
        this.getPlaylistsCreadas();
        this.getPlaylistsSeguidas();
    };
    PlaylistsPage.prototype.getPlaylistsCreadas = function () {
        var _this = this;
        this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.playlists_creadas = resultado.playlists_buscados;
        });
    };
    PlaylistsPage.prototype.getPlaylistsSeguidas = function () {
        var _this = this;
        this._playlistService.obtenerPlaylistsSeguidas(this.token).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.playlists_seguidas = resultado.playlists_buscados.playlists;
            console.log("seguidas", _this.playlists_seguidas);
        });
    };
    PlaylistsPage.prototype.irPlaylist = function (playlist) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_playlist_playlist__["a" /* PlaylistPage */], {
            'id': playlist.id
        });
    };
    PlaylistsPage.prototype.crearPlaylist = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Crear Playlist',
            inputs: [
                {
                    name: 'nombre_playlist',
                    placeholder: 'Nombre de la playlist'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Crear playlist',
                    handler: function (data) {
                        var resultado = data;
                        console.log(data.nombre_playlist);
                        _this.crearUnaPlyslist(data.nombre_playlist);
                    }
                }
            ]
        });
        alert.present();
    };
    PlaylistsPage.prototype.crearUnaPlyslist = function (nombre) {
        var _this = this;
        var playlist = new __WEBPACK_IMPORTED_MODULE_4__models_playlist__["a" /* Playlist */]("", nombre);
        this._playlistService.addPlaylist(this.token, playlist).subscribe(function (response) {
            _this.presentToast("Se ha creado con éxito");
        }, function (error) {
            _this.presentToast("hay un error al crear la playlist");
        });
    };
    PlaylistsPage.prototype.presentToast = function (texto) {
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaylistsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playlists',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\playlists\playlists.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center >Playlists</ion-title>\n    <ion-buttons end><button (click)="crearPlaylist()" ion-button  color="danger" round outline> <ion-icon name="add"></ion-icon></button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-style">\n\n  <ion-list class="bg-style" *ngIf="playlists_creadas && playlists_creadas.length >0">\n    <h1 text-center>Playlists creadas:</h1>\n\n    <ion-item class="bg-style"  *ngFor="let playlist of playlists_creadas" (click)="irPlaylist(playlist)" detail-push>\n      {{playlist.nombre}}\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="bg-style" *ngIf="playlists_seguidas && playlists_seguidas.length >0">\n    <h1 text-center>Playlists seguidas:</h1>\n\n    <ion-item   class="bg-style" *ngFor="let playlist_seguida of playlists_seguidas" (click)="irPlaylist(playlist_seguida)" detail-push >\n      {{playlist_seguida.nombre}}\n      \n    </ion-item>\n\n  </ion-list>\n\n\n  <div style="padding-bottom:5.6rem;">\n\n    </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\playlists\playlists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PlaylistsPage);
    return PlaylistsPage;
}());

//# sourceMappingURL=playlists.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalColaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalColaPage = /** @class */ (function () {
    function ModalColaPage(navCtrl, navParams, _reproductorService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._reproductorService = _reproductorService;
        this.viewCtrl = viewCtrl;
    }
    ModalColaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalColaPage');
    };
    ModalColaPage.prototype.reorderItems = function (indexes) {
        var element = this._reproductorService.cola[indexes.from];
        this._reproductorService.cola.splice(indexes.from, 1);
        this._reproductorService.cola.splice(indexes.to, 0, element);
    };
    ModalColaPage.prototype.eliminarCancionCola = function (id) {
        this._reproductorService.eliminarCancionCola(id);
    };
    ModalColaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-cola',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\modal-cola\modal-cola.html"*/'\n<ion-header>\n\n  <ion-navbar transparent>\n      <ion-buttons left>\n          <button color="light" ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  class="fondo">\n  <h3 class="sonando"*ngIf="_reproductorService.cancion_sonando">Está sonando: {{_reproductorService.cancion_sonando.nombre}}</h3>\n\n  <hr>\n\n  <ion-list *ngIf="_reproductorService.cola" class="transparente">\n      <ion-list-header class="transparente">Siguientes en reproducirse:</ion-list-header>\n      <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n          <div *ngFor="let cancion of _reproductorService.cola"> \n                <ion-item class="transparente">{{ cancion.nombre }} <button ion-button  item-end (click)="eliminarCancionCola(cancion.id)" color="light" round outline> <ion-icon name="trash"></ion-icon></button></ion-item>\n                \n          </div>\n        \n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\modal-cola\modal-cola.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalColaPage);
    return ModalColaPage;
}());

//# sourceMappingURL=modal-cola.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReproductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_cola_modal_cola__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicio reproductor


var ModalReproductorPage = /** @class */ (function () {
    function ModalReproductorPage(navCtrl, navParams, viewController, _ServicioReproductor, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this._ServicioReproductor = _ServicioReproductor;
        this.modalCtrl = modalCtrl;
        this.position = 0;
    }
    ModalReproductorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalReproductorPage');
    };
    ModalReproductorPage.prototype.cerrarModal = function () {
        this.viewController.dismiss();
    };
    ModalReproductorPage.prototype.updateDuracion = function (e) {
        this.duracion = this._ServicioReproductor.cancion_sonar.currentTime;
    };
    ModalReproductorPage.prototype.siguienteCancion = function () {
        this._ServicioReproductor.siguienteCancion();
    };
    ModalReproductorPage.prototype.pasadaCancion = function () {
        this._ServicioReproductor.pasadaCancion();
    };
    ModalReproductorPage.prototype.abrirModalCola = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_cola_modal_cola__["a" /* ModalColaPage */]);
        profileModal.present();
    };
    ModalReproductorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reproductor',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\modal-reproductor\modal-reproductor.html"*/'\n\n<ion-content padding class="bg-style">\n    <ion-icon style="zoom:2.5;"  (click)="cerrarModal()" name="ios-arrow-dropdown-outline"></ion-icon>\n    <ion-icon float-right style="zoom:2.5;"  (click)="abrirModalCola()" name="ios-list-box-outline"></ion-icon>\n\n\n    <div text-center>\n            \n        \n        <div class="avatar">\n          <img id="imagen-reproductor" *ngIf="_ServicioReproductor.album_sonando" src="{{_ServicioReproductor.url+\'obtener-foto-album/\' + _ServicioReproductor.album_sonando.imagen}}" alt="">\n        </div>\n        <h1 ion-text *ngIf="_ServicioReproductor.cancion_sonando">{{ _ServicioReproductor.cancion_sonando.nombre}}</h1>\n        <h6 ion-text *ngIf="_ServicioReproductor.artista_sonando" class="artista-nombre">{{ _ServicioReproductor.artista_sonando.nombre}}</h6>\n        <div *ngIf="_ServicioReproductor.cancion_sonar">\n            <ion-range  color="danger" min="0" max="{{_ServicioReproductor.cancion_sonar.duration}}" [(ngModel)]="_ServicioReproductor.cancion_sonar.currentTime" debounce="500"  (ionChange)="updateDuracion($event)">\n              <ion-label range-left >{{ _ServicioReproductor.cancion_sonar.currentTime*1000 | date:\'mm:ss\'}}</ion-label>\n              <ion-label range-right *ngIf="_ServicioReproductor.cancion_sonando.duracion == -1" >--:--</ion-label>\n              <ion-label range-right *ngIf="_ServicioReproductor.cancion_sonando.duracion != -1">{{ _ServicioReproductor.cancion_sonando.duracion }}</ion-label>\n            </ion-range>\n          </div>\n          \n         \n          <ion-grid>\n              <ion-row justify-content-center align-items-center style="height: 100%">\n                <ion-col>\n                  <!-- Backwards -->\n                  <button ion-button class="skip-btn" clear="true" [disabled]="!_ServicioReproductor.reproduciendo" (click)="pasadaCancion()">\n                          &nbsp;&nbsp;<ion-icon name="skip-backward"></ion-icon>&nbsp;&nbsp;\n                  </button>\n                </ion-col>\n                <ion-col>\n                  <!-- Play/Pause -->\n                  <button ion-button round outline center text-center class="play-pause-btn" (click)="_ServicioReproductor.seguirCancion()" color="danger" *ngIf="!_ServicioReproductor.sonando" [disabled]="!_ServicioReproductor.reproduciendo" >\n                    <ion-icon name="play"></ion-icon>\n                  </button>\n        \n                  <button ion-button center round outline text-center class="play-pause-btn" (click)="_ServicioReproductor.pausarCancion()" color="danger" *ngIf="_ServicioReproductor.sonando" [disabled]="!_ServicioReproductor.reproduciendo">\n                    <ion-icon name="pause"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col>\n                  <!-- Forwards -->\n                  <button ion-button class="skip-btn" clear="true" [disabled]="!_ServicioReproductor.reproduciendo && _ServicioReproductor.cola && !_ServicioReproductor.cola.length>0" (click)="siguienteCancion()">\n                          &nbsp;&nbsp;<ion-icon name="skip-forward"></ion-icon>&nbsp;&nbsp;\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\modal-reproductor\modal-reproductor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__["a" /* ReproductorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModalReproductorPage);
    return ModalReproductorPage;
}());

//# sourceMappingURL=modal-reproductor.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReproductorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_music_controls__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReproductorService = /** @class */ (function () {
    function ReproductorService(http, _ususarioService, plt, musicControls) {
        this.http = http;
        this._ususarioService = _ususarioService;
        this.plt = plt;
        this.musicControls = musicControls;
        this.cancion_sonando = null;
        this.cola = [];
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
        this.duracion = -1;
        this.cancion_sonar = new Audio();
        this.pila = [];
        this.es_album = false;
        this.reproduciendo = false;
    }
    ReproductorService.prototype.establecerCancion = function (cancion) {
        this.cancion_sonando = cancion;
        this.duracion = cancion.duracion;
        console.log("duracion normal", this.duracion);
        console.log("duracion cancion", parseInt(this.duracion));
    };
    ReproductorService.prototype.establecerArtista = function (artista) {
        this.artista_sonando = artista;
    };
    ReproductorService.prototype.establecerAlbum = function (album) {
        this.album_sonando = album;
    };
    ReproductorService.prototype.playCancion = function () {
        this.obtenerAlbumArtista(this.cancion_sonando.id);
        this.cancion_sonar.setAttribute("src", this.url + '/obtener-fichero-cancion/' + this.cancion_sonando.archivo);
        this.cancion_sonar.load();
        this.seguirCancion();
        this.controlesMusica();
        this.reproduciendo = true;
        this.sonando = true;
    };
    ReproductorService.prototype.pausarCancion = function () {
        this.cancion_sonar.pause();
        this.sonando = false;
        this.musicControls.updateIsPlaying(false);
        this.quitarIntervalo();
    };
    ReproductorService.prototype.seguirCancion = function () {
        this.cancion_sonar.play();
        this.timeout();
        this.sonando = true;
        this.musicControls.updateIsPlaying(true);
    };
    ReproductorService.prototype.establecerCola = function (cola_nueva) {
        this.cola = cola_nueva;
        console.log("cola", this.cola);
    };
    ReproductorService.prototype.addCancionCola = function (cancion) {
        this.cola.push(cancion);
    };
    ReproductorService.prototype.siguienteCancion = function () {
        this.pila.push(this.cancion_sonando);
        if (this.cola.length > 0) {
            var cancion = this.cola[0];
            this.establecerCancion(cancion);
            this.playCancion();
            for (var i = 0; i < this.cola.length; i++) {
                if (this.cola[i].id == cancion.id) {
                    this.cola.splice(i, 1);
                    break;
                }
            }
        }
    };
    ReproductorService.prototype.pasadaCancion = function () {
        if (this.cancion_sonar.currentTime < 10) {
            //Añadimos la canción a la cola (la primera)
            this.cola.splice(0, 0, this.cancion_sonando);
            var cancion = this.pila.pop();
            this.establecerCancion(cancion);
            this.playCancion();
        }
        else {
            this.playCancion();
        }
    };
    ReproductorService.prototype.obtenerAlbumArtista = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': this._ususarioService.getToken() });
        this.http.get(this.url + 'get-album-artista-cancion/' + id, { headers: headers }).subscribe(function (response) {
            var resultado = response;
            console.log("response getalbumartista", response);
            _this.album_sonando = resultado.cancion_buscado.Album;
            console.log("album_sonando", _this.album_sonando);
            _this.artista_sonando = resultado.cancion_buscado.Album.Artistum;
            console.log("artista sonando", _this.artista_sonando);
        }, function (error) {
            console.log(error);
        });
    };
    ReproductorService.prototype.controlesMusica = function () {
        var _this = this;
        //Si es un dispositivo móvil
        if (this.plt.is('ios') || this.plt.is('android')) {
            //alert("BIEEEN")
            this.musicControls.destroy(); // it's the same with or without the destroy 
            this.musicControls.create({
                track: this.cancion_sonando.nombre,
                artist: this.artista_sonando.nombre,
                cover: this.url + 'obtener-foto-album/' + this.album_sonando.imagen,
                // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
                //           or a remote url ('http://...', 'https://...', 'ftp://...')
                isPlaying: true,
                dismissable: true,
                // hide previous/next/close buttons:
                hasPrev: true,
                hasNext: true,
                hasClose: false,
                // Android only, optional
                // text displayed in the status bar when the notification (and the ticker) are updated, optional
                ticker: 'Ahora sonando:' + this.cancion_sonando.nombre,
                // All icons default to their built-in android equivalents
                // The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders
                playIcon: 'media_play',
                pauseIcon: 'media_pause',
                prevIcon: 'media_prev',
                nextIcon: 'media_next',
                closeIcon: 'media_close',
                notificationIcon: 'notification'
            });
            this.musicControls.subscribe().subscribe(function (action) {
                //function events(action) {
                //console.log('action', action);
                // const message = JSON.parse(action).message;
                var message = JSON.parse(action).message;
                //alert(message)
                switch (message) {
                    case 'music-controls-next':
                        // Do something
                        _this.siguienteCancion();
                        break;
                    case 'music-controls-previous':
                        // Do something
                        _this.pasadaCancion();
                        break;
                    case 'music-controls-pause':
                        // Do something
                        console.log('musc pause');
                        _this.pausarCancion();
                        _this.musicControls.updateIsPlaying(false);
                        break;
                    case 'music-controls-play':
                        // Do something
                        console.log('music play');
                        _this.seguirCancion();
                        _this.musicControls.updateIsPlaying(true);
                        break;
                    case 'music-controls-destroy':
                        // Do something
                        break;
                    // External controls (iOS only)
                    case 'music-controls-toggle-play-pause':
                        // Do something
                        break;
                    case 'music-controls-seek-to':
                        // Do something
                        break;
                    case 'music-controls-skip-forward':
                        // Do something
                        _this.siguienteCancion();
                        break;
                    case 'music-controls-skip-backward':
                        // Do something
                        _this.pasadaCancion();
                        break;
                    // Headset events (Android only)
                    // All media button events are listed below
                    case 'music-controls-media-button':
                        // Do something
                        break;
                    case 'music-controls-headset-unplugged':
                        // Do something
                        break;
                    case 'music-controls-headset-plugged':
                        // Do something
                        break;
                    default:
                        break;
                }
                // this.musicControls.listen();
                // }
                //this.musicControls.subscribe()
            });
            this.musicControls.listen(); // activates the observable above
            this.musicControls.updateIsPlaying(true);
        }
    };
    ReproductorService.prototype.eliminarCancionCola = function (id) {
        for (var i = 0; i < this.cola.length; i++) {
            if (this.cola[i].id == id) {
                this.cola.splice(i, 1);
                break;
            }
        }
    };
    ReproductorService.prototype.updateDuracion = function () {
        this.duracion = this.cancion_sonar.currentTime;
        var resta = this.cancion_sonar.duration - this.duracion;
        console.log("resta desde intervalo", resta);
        if (resta < 1) {
            this.siguienteCancion();
        }
    };
    ReproductorService.prototype.timeout = function () {
        var _this = this;
        console.log("poner intervalo");
        this.intervalo = setInterval(function () {
            _this.updateDuracion();
        }, 1000);
    };
    ReproductorService.prototype.quitarIntervalo = function () {
        clearInterval(this.intervalo);
    };
    ReproductorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_music_controls__["a" /* MusicControls */]])
    ], ReproductorService);
    return ReproductorService;
}());

//# sourceMappingURL=reproductor.service.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://192.168.1.37:3977/api/'
};
//# sourceMappingURL=GLOBAL.service.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/album/album.module": [
		334,
		12
	],
	"../pages/artista/artista.module": [
		335,
		11
	],
	"../pages/artistas/artistas.module": [
		336,
		10
	],
	"../pages/buscar/buscar.module": [
		337,
		9
	],
	"../pages/datos/datos.module": [
		338,
		8
	],
	"../pages/lista-playlists/lista-playlists.module": [
		339,
		7
	],
	"../pages/login/login.module": [
		340,
		6
	],
	"../pages/modal-cola/modal-cola.module": [
		341,
		5
	],
	"../pages/modal-reproductor/modal-reproductor.module": [
		342,
		4
	],
	"../pages/playlist/playlist.module": [
		343,
		3
	],
	"../pages/playlists/playlists.module": [
		344,
		2
	],
	"../pages/registro/registro.module": [
		345,
		1
	],
	"../pages/usuario/usuario.module": [
		346,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var Playlist = /** @class */ (function () {
    function Playlist(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Playlist;
}());

//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, apellidos, email, password, rol, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.imagen = imagen;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artista_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_album_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_artista_artista__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_album_album__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicio reproductor







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _ServicioReproductor, _artistaService, _usuarioService, _albumService) {
        this.navCtrl = navCtrl;
        this._ServicioReproductor = _ServicioReproductor;
        this._artistaService = _artistaService;
        this._usuarioService = _usuarioService;
        this._albumService = _albumService;
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_GLOBAL_service__["a" /* GLOBAL */].url;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getAlbumes();
        this.getArtistas();
    };
    HomePage.prototype.getArtistas = function () {
        var _this = this;
        this._artistaService.ultimosArtistas(this.token).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.artistas = resultado.artistas_buscados;
            console.log(_this.artistas);
        });
    };
    HomePage.prototype.irArtista = function (artista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_artista_artista__["a" /* ArtistaPage */], {
            'id': artista.id
        });
    };
    HomePage.prototype.getAlbumes = function () {
        var _this = this;
        this._albumService.ultimosAlbumes(this.token).subscribe(function (response) {
            var resultado = response;
            _this.albumes = resultado.albumes_buscados;
            console.log(_this.albumes);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.irAlbum = function (album) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_album_album__["a" /* AlbumPage */], {
            'id': album.id
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-style">\n\n    <h5 text-center>Últimos álbumes añadidos:</h5>\n\n    <ion-slides class="image-slider" slidesPerView="2" loop="true" >\n            \n        <ion-slide *ngFor="let album of albumes" (click)="irAlbum(album)">\n            <img src="{{url+\'obtener-foto-album/\' + album.imagen}}" class="thumb-img" >\n            <h4>{{album.titulo}}</h4>\n\n        </ion-slide>\n\n    </ion-slides>\n\n    <h5 text-center>Últimos artistas añadidos:</h5>\n    <ion-slides class="image-slider" loop="true" slidesPerView="2">\n            \n        <ion-slide *ngFor="let artista of artistas" (click)="irArtista(artista)"  >\n            <img src="{{url+\'obtener-foto-artista/\' + artista.imagen}}" class="thumb-img" >\n            <h4>{{artista.nombre}}</h4>\n           \n        </ion-slide>\n\n    </ion-slides>\n  \n    <div style="padding-bottom:5.6rem;">\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_reproductor_service__["a" /* ReproductorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_artista_service__["a" /* ArtistaService */], __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RoundPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reproductor_reproductor__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_reproductor_modal_reproductor__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_artista_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_album_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cancion_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_playlist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_artistas_artistas__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_playlists_playlists__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_buscar_buscar__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_datos_datos__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_artista_artista__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_album_album__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_lista_playlists_lista_playlists__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modal_cola_modal_cola__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_playlist_playlist__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_progressbar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_transfer__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_music_controls__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_action_sheet__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__interceptors_interceptor__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Reproductor


//Servicios






//LoginPage

//RegistroPage

//Otras paginas












// round.pipe.ts



//Controles de musica

/**
 *
 */
//Action camara

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'round' })
    ], RoundPipe);
    return RoundPipe;
}());

//HTTPINCEPTOR


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_artistas_artistas__["a" /* ArtistasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reproductor_reproductor__["a" /* ReproductorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_playlists_playlists__["a" /* PlaylistsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_reproductor_modal_reproductor__["a" /* ModalReproductorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_artista_artista__["a" /* ArtistaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_cola_modal_cola__["a" /* ModalColaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_playlist_playlist__["a" /* PlaylistPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_lista_playlists_lista_playlists__["a" /* ListaPlaylistsPage */],
                RoundPipe
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng2_progressbar__["a" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/album/album.module#AlbumPageModule', name: 'AlbumPage', segment: 'album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artista/artista.module#ArtistaPageModule', name: 'ArtistaPage', segment: 'artista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artistas/artistas.module#ArtistasPageModule', name: 'ArtistasPage', segment: 'artistas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar/buscar.module#BuscarPageModule', name: 'BuscarPage', segment: 'buscar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datos/datos.module#DatosPageModule', name: 'DatosPage', segment: 'datos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-playlists/lista-playlists.module#ListaPlaylistsPageModule', name: 'ListaPlaylistsPage', segment: 'lista-playlists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-cola/modal-cola.module#ModalColaPageModule', name: 'ModalColaPage', segment: 'modal-cola', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reproductor/modal-reproductor.module#ModalReproductorPageModule', name: 'ModalReproductorPage', segment: 'modal-reproductor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playlist/playlist.module#PlaylistPageModule', name: 'PlaylistPage', segment: 'playlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playlists/playlists.module#PlaylistsPageModule', name: 'PlaylistsPage', segment: 'playlists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_artistas_artistas__["a" /* ArtistasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_playlists_playlists__["a" /* PlaylistsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reproductor_reproductor__["a" /* ReproductorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_reproductor_modal_reproductor__["a" /* ModalReproductorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_artista_artista__["a" /* ArtistaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_playlist_playlist__["a" /* PlaylistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modal_cola_modal_cola__["a" /* ModalColaPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_lista_playlists_lista_playlists__["a" /* ListaPlaylistsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_reproductor_service__["a" /* ReproductorService */],
                __WEBPACK_IMPORTED_MODULE_11__services_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_13__services_album_service__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_12__services_artista_service__["a" /* ArtistaService */],
                __WEBPACK_IMPORTED_MODULE_14__services_cancion_service__["a" /* CancionService */],
                __WEBPACK_IMPORTED_MODULE_15__services_playlist_service__["a" /* PlaylistService */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_music_controls__["a" /* MusicControls */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_action_sheet__["a" /* ActionSheet */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_34__interceptors_interceptor__["a" /* MyInterceptor */], multi: true }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_usuario_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    //CCOMPROBAR AQUI SI SE INICIADO SESIÓN ALGUNA VEZ
    function MyApp(platform, statusBar, splashScreen, _userService) {
        this._userService = _userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        if (_userService.getToken()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_usuario_service__["a" /* UsuarioService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReproductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_reproductor_modal_reproductor__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Servicio reproductor

var ReproductorPage = /** @class */ (function () {
    function ReproductorPage(navCtrl, modalCtrl, _ServicioReproductor) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._ServicioReproductor = _ServicioReproductor;
    }
    ReproductorPage.prototype.abrirModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_reproductor_modal_reproductor__["a" /* ModalReproductorPage */]);
        profileModal.present();
    };
    ReproductorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reproductor',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\reproductor\reproductor.html"*/'<div *ngIf="_ServicioReproductor.cancion_sonando" class="reproductor"  >\n\n\n\n    \n\n    <div  >\n\n                <div style="height:1px"class="progress">\n\n                                <div class="progress-bar" style="background-color:#dd4b39!important"[style.width]="((100*_ServicioReproductor.cancion_sonar.currentTime/_ServicioReproductor.cancion_sonar.duration) | round) + \'%\'"></div>\n\n                </div>               \n\n                \n\n                \n\n            <ion-item class="un-item">\n\n                    <ion-icon item-left ion-left (click)="abrirModal()" name="ios-arrow-dropup-outline"></ion-icon>\n\n                    <div text-center (click)="abrirModal()">{{_ServicioReproductor.cancion_sonando.nombre}}</div> \n\n                    <button ion-button item-right ion-right round outline color="light" (click)="_ServicioReproductor.seguirCancion()" *ngIf="!_ServicioReproductor.sonando"><ion-icon  name="play"></ion-icon></button>\n\n                    <button ion-button item-right ion-right round outline color="light" (click)="_ServicioReproductor.pausarCancion()" *ngIf="_ServicioReproductor.sonando"><ion-icon  name="pause"></ion-icon></button>\n\n                   \n\n            </ion-item>\n\n            \n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\reproductor\reproductor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_reproductor_service__["a" /* ReproductorService */]])
    ], ReproductorPage);
    return ReproductorPage;
}());

//# sourceMappingURL=reproductor.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_usuario_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//Importamos los servicios

var MyInterceptor = /** @class */ (function () {
    function MyInterceptor(_userService, _app) {
        this._userService = _userService;
        this._app = _app;
    }
    MyInterceptor.prototype.cerrarSesion = function () {
        this._userService.cerrarSesion();
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var customReq = request.clone({});
        return next.handle(customReq).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]) {
                console.log("Esado de la petición->", event.status);
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                console.log("Esado de la petición error->", err.status);
                if (err.status == 401 || err.status == 403) {
                    console.log("SE REFRESCA EL TOKEN");
                    _this._userService.refrescarToken().subscribe(function (response) {
                        var resultado = response;
                        _this._userService.setToken(resultado.token);
                        //alert(this._userService.getToken())
                        var token = _this._userService.getToken();
                        var authReq = request.clone({ headers: request.headers.set('Authorization', token) });
                        //alert("SE HA REFRESCADO EL TOKEN")
                        return next.handle(authReq); //se crea otra vez la petición
                    }, function (error) {
                        _this._userService.setToken(null);
                        _this.cerrarSesion();
                    });
                }
            }
        });
    };
    MyInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* App */]])
    ], MyInterceptor);
    return MyInterceptor;
}());

//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaylistService = /** @class */ (function () {
    function PlaylistService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
    }
    PlaylistService.prototype.addPlaylist = function (token, playlist) {
        var params = JSON.stringify(playlist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + 'crear-playlist', params, { headers: headers });
    };
    PlaylistService.prototype.obtenerPlaylist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + 'get-playlist/' + id, { headers: headers });
    };
    PlaylistService.prototype.obtenerPlaylistsSeguidas = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + '/get-playlists-seguidas', { headers: headers });
    };
    PlaylistService.prototype.obtenerPlaylistsCreadas = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + '/get-playlists-creadas', { headers: headers });
    };
    PlaylistService.prototype.editarPlaylist = function (token, playlist) {
        var params = JSON.stringify(playlist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + 'modificar-playlist/' + playlist.id, params, { headers: headers });
    };
    PlaylistService.prototype.borrarPlaylist = function (token, playlist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.delete(this.url + 'eliminar-playlist/' + playlist.id, { headers: headers });
    };
    PlaylistService.prototype.addCancionPlaylist = function (token, cancion, playlist) {
        var params = JSON.stringify(cancion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + 'add-cancion-playlist/' + playlist.id, params, { headers: headers });
    };
    PlaylistService.prototype.filtrarPlaylists = function (token, valor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'filtrar-playlists/' + valor, { headers: headers });
    };
    PlaylistService.prototype.seguirPlaylist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'seguir-playlist/' + id, { headers: headers });
    };
    PlaylistService.prototype.dejarSeguirPlaylist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'dejar-seguir-playlist/' + id, { headers: headers });
    };
    PlaylistService.prototype.verSeguida = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'ver-playlist-seguida/' + id, { headers: headers });
    };
    PlaylistService.prototype.obtenerPlaylistsSeguidasUsuario = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + 'ver-playlists-seguidas-usuario/' + id, { headers: headers });
    };
    PlaylistService.prototype.obtenerPlaylistsCreadasUsuario = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + 'ver-playlists-creadas-usuario/' + id, { headers: headers });
    };
    PlaylistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PlaylistService);
    return PlaylistService;
}());

//# sourceMappingURL=playlist.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
    }
    AlbumService.prototype.getAlbum = function (token, id) {
        console.log("id album", id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'get-album/' + id, { headers: headers });
    };
    AlbumService.prototype.getAlbums = function (token, artistaId) {
        if (artistaId === void 0) { artistaId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        if (artistaId == null) {
            return this.http.get(this.url + 'get-albums/', { headers: headers });
        }
        else {
            return this.http.get(this.url + 'get-albums-artista/' + artistaId, { headers: headers });
        }
    };
    AlbumService.prototype.filtrarAlbumes = function (token, valor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'filtrar-albumes/' + valor, { headers: headers });
    };
    AlbumService.prototype.ultimosAlbumes = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'ultimos-albumes', { headers: headers });
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AlbumService);
    return AlbumService;
}());

//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistaService = /** @class */ (function () {
    function ArtistaService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
    }
    ArtistaService.prototype.obtenerArtistas = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + 'get-artistas/', { headers: headers });
    };
    ArtistaService.prototype.obtenerArtista = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json',
            'Authorization': token });
        return this.http.get(this.url + 'artista/' + id, { headers: headers });
    };
    ArtistaService.prototype.filtrarPlaylists = function (token, valor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'filtrar-artistas/' + valor, { headers: headers });
    };
    ArtistaService.prototype.ultimosArtistas = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'ultimos-artistas', { headers: headers });
    };
    ArtistaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ArtistaService);
    return ArtistaService;
}());

//# sourceMappingURL=artista.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cancion_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_playlists_lista_playlists__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AlbumPage = /** @class */ (function () {
    function AlbumPage(navCtrl, navParams, _usuarioService, _albumService, _cancionService, actionSheetCtrl, _reproductorService, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._albumService = _albumService;
        this._cancionService = _cancionService;
        this.actionSheetCtrl = actionSheetCtrl;
        this._reproductorService = _reproductorService;
        this.popoverCtrl = popoverCtrl;
        this.id = navParams.get('id');
        this.artista = navParams.get('artista');
        console.log(this.id);
        console.log("artista album", this.artista);
        this.token = this._usuarioService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__["a" /* GLOBAL */].url;
        this.reproduciendo = false;
    }
    AlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumPage');
        this.getAlbum();
        this.getCanciones();
    };
    AlbumPage.prototype.getAlbum = function () {
        var _this = this;
        this._albumService.getAlbum(this.token, this.id).subscribe(function (response) {
            console.log(response);
            var resultado = response;
            _this.album = resultado.album_buscado;
        });
    };
    AlbumPage.prototype.getCanciones = function () {
        var _this = this;
        this._cancionService.getCanciones(this.token, this.id).subscribe(function (response) {
            console.log(response);
            var resultado = response;
            _this.canciones = resultado.canciones_buscadas;
        });
    };
    AlbumPage.prototype.opciones = function (cancion) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: cancion.nombre,
            buttons: [
                {
                    text: 'Añadir a cola',
                    role: 'destructive',
                    handler: function () {
                        _this._reproductorService.addCancionCola(cancion);
                    }
                },
                {
                    text: 'Añadir a Playlist',
                    handler: function () {
                        var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__lista_playlists_lista_playlists__["a" /* ListaPlaylistsPage */], {
                            'cancion': cancion
                        });
                        popover.present({});
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AlbumPage.prototype.primeraMayuscula = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    AlbumPage.prototype.reproducirCancion = function (cancion) {
        this.reproduciendo = true;
        this._reproductorService.establecerCancion(cancion);
        this._reproductorService.establecerArtista(this.artista);
        this._reproductorService.establecerAlbum(this.album);
        this._reproductorService.reproduciendo = true;
        this._reproductorService.sonando = true;
        this._reproductorService.playCancion();
        this.administrarColaCanciones(cancion);
    };
    AlbumPage.prototype.addCancionCola = function (cancion) {
        this._reproductorService.addCancionCola(cancion);
    };
    AlbumPage.prototype.administrarColaCanciones = function (cancion) {
        this.cola = Object.assign([], this.canciones);
        for (var i = 0; i < this.cola.length; i++) {
            if (this.cola[i].id == cancion.id) {
                this.cola.splice(i, 1);
                break;
            }
        }
        this._reproductorService.establecerCola(this.cola);
    };
    AlbumPage.prototype.compararCancion = function (id) {
        if (!this._reproductorService.cancion_sonando)
            return false;
        else
            return id == this._reproductorService.cancion_sonando.id;
    };
    AlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\album\album.html"*/'\n<ion-header no-border>\n\n  <ion-navbar transparent>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-style">\n\n  <ion-row *ngIf="album">\n\n    <ion-col col-6>\n        <img  class="imagen" src="{{url+\'obtener-foto-album/\' + album.imagen}}"/>\n    </ion-col>   \n\n    <ion-col class="bg-style" col-6>\n      <h2>{{primeraMayuscula(album.titulo)}}</h2>\n      <h5>{{album.anio}}</h5>\n    </ion-col>\n\n  </ion-row>\n\n\n  <h1>Canciones:</h1>\n  <ion-list class="bg-style">\n    <ion-item  class="bg-style" *ngFor="let cancion of canciones"  [ngStyle]="{\n      \'color\': compararCancion(cancion.id) ? \'red\':\'white\'\n  }">\n        <ion-icon item-left ion-left name="ios-play" (click)="reproducirCancion(cancion)"></ion-icon>\n        <div text-center><strong>{{primeraMayuscula(cancion.nombre)}}</strong> - &nbsp;{{cancion.duracion}}</div> \n        <ion-icon item-right ion-right (click)="opciones(cancion)"name="ios-more"></ion-icon>\n\n      </ion-item>\n\n  </ion-list>\n\n  <div class="bg-style" style="padding-bottom:5.6rem;">\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\album\album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_5__services_cancion_service__["a" /* CancionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], AlbumPage);
    return AlbumPage;
}());

//# sourceMappingURL=album.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPlaylistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaPlaylistsPage = /** @class */ (function () {
    function ListaPlaylistsPage(navCtrl, navParams, _usuarioService, _playlistService, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this._playlistService = _playlistService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.token = this._usuarioService.getToken();
        this.cancion = navParams.get('cancion');
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_GLOBAL_service__["a" /* GLOBAL */].url;
        console.log(this.cancion);
    }
    ListaPlaylistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPlaylistsPage');
        this.getPlaylists();
    };
    ListaPlaylistsPage.prototype.getPlaylists = function () {
        var _this = this;
        this._playlistService.obtenerPlaylistsCreadas(this.token).subscribe(function (response) {
            var resultado = response;
            console.log("playlists", resultado);
            _this.playlists = resultado.playlists_buscados;
        }, function (error) {
            console.log(error);
        });
    };
    ListaPlaylistsPage.prototype.primeraMayuscula = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ListaPlaylistsPage.prototype.addCancionPlaylist = function (playlist) {
        var _this = this;
        this._playlistService.addCancionPlaylist(this.token, this.cancion, playlist).subscribe(function (response) {
            console.log(response);
            var toast = _this.toastCtrl.create({
                message: 'Se ha añadido correctamente',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            _this.viewCtrl.dismiss();
        }, function (error) {
            console.log(error);
            var toast = _this.toastCtrl.create({
                message: 'Ha habido un error, puede que esté añadida',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            _this.viewCtrl.dismiss();
        });
    };
    ListaPlaylistsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-playlists',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\lista-playlists\lista-playlists.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="cancion">Añadir {{cancion.nombre}} a Playlist:</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-list>\n\n    <ion-item *ngFor="let playlist of playlists">\n        <div text-center (click)="addCancionPlaylist(playlist)">{{primeraMayuscula(playlist.nombre)}}</div> \n        \n    </ion-item>\n\n  </ion-list>\n\n  <div style="padding-bottom:5.6rem;">\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\lista-playlists\lista-playlists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__["a" /* PlaylistService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ListaPlaylistsPage);
    return ListaPlaylistsPage;
}());

//# sourceMappingURL=lista-playlists.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artista_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_GLOBAL_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_album_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__album_album__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArtistaPage = /** @class */ (function () {
    function ArtistaPage(navCtrl, navParams, _artistasService, _usuarioService, _albumService, _ServicioReproductor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._artistasService = _artistasService;
        this._usuarioService = _usuarioService;
        this._albumService = _albumService;
        this._ServicioReproductor = _ServicioReproductor;
        this.id = navParams.get('id');
        this.token = this._usuarioService.getToken();
        console.log(this.id);
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_GLOBAL_service__["a" /* GLOBAL */].url;
    }
    ArtistaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArtistaPage');
        this.getArtista();
        this.getAlbumes();
    };
    ArtistaPage.prototype.getArtista = function () {
        var _this = this;
        this._artistasService.obtenerArtista(this.token, this.id).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.artista = resultado.artista_buscado;
            console.log(_this.artista);
        }, function (error) {
            console.log(error);
        });
    };
    ArtistaPage.prototype.getAlbumes = function () {
        var _this = this;
        this._albumService.getAlbums(this.token, this.id).subscribe(function (Response) {
            var resultado = Response;
            console.log(resultado);
            _this.albumes = resultado.albums_buscados;
            console.log(_this.albumes.length);
        });
    };
    ArtistaPage.prototype.irAlbum = function (album) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__album_album__["a" /* AlbumPage */], {
            'id': album.id,
            'artista': this.artista
        });
    };
    ArtistaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artista',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\artista\artista.html"*/'<ion-header no-border>\n    <ion-navbar transparent >\n      \n      \n     \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="card-background-page bg-style">\n\n\n    <ion-card *ngIf="artista">\n        <img  src="{{url+\'obtener-foto-artista/\' + artista.imagen}}"/>\n        <div class="card-title">{{artista.nombre}}</div>\n      </ion-card>\n      \n      <h2 *ngIf="albumes && albumes.length>0">Álbumes:</h2>\n      <h2 *ngIf="albumes && albumes.length==0">No hay álbumes :(</h2>\n     <ion-grid>\n       <ion-row>\n\n       \n       <ion-col class="bg-style" col-6  *ngFor="let album of albumes" (click)="irAlbum(album)">\n          <img  class="imagen" src="{{url+\'obtener-foto-album/\' + album.imagen}}"/>\n        <h5 text-center>{{album.titulo}}</h5>\n        <div text-center>{{album.anio}}</div>\n       </ion-col>\n       \n      </ion-row>\n     </ion-grid>\n\n     <div style="padding-bottom:5.6rem;">\n\n      </div>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\artista\artista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_artista_service__["a" /* ArtistaService */], __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_reproductor_service__["a" /* ReproductorService */]])
    ], ArtistaPage);
    return ArtistaPage;
}());

//# sourceMappingURL=artista.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_playlist__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lista_playlists_lista_playlists__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PlaylistPage = /** @class */ (function () {
    function PlaylistPage(navCtrl, navParams, ref, _usuarioService, _playlistService, _reproductorService, popoverCtrl, actionSheetCtrl, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this._usuarioService = _usuarioService;
        this._playlistService = _playlistService;
        this._reproductorService = _reproductorService;
        this.popoverCtrl = popoverCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.token = this._usuarioService.getToken();
        this.id = navParams.get('id');
        this.playlist = new __WEBPACK_IMPORTED_MODULE_2__models_playlist__["a" /* Playlist */]("", "");
        setInterval(function () {
            _this.ref.detectChanges();
        }, 1500);
    }
    PlaylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaylistPage');
        this.getPlaylist();
    };
    PlaylistPage.prototype.getPlaylist = function () {
        var _this = this;
        this._playlistService.obtenerPlaylist(this.token, this.id).subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this.playlist.nombre = resultado.playlist_buscado.nombre;
            _this.playlist.id = resultado.playlist_buscado.id;
            _this.canciones = resultado.playlist_buscado.canciones;
            _this.usuario = resultado.playlist_buscado.Usuario;
            _this.getIdentidadToken();
        }, function (error) {
            console.log(error);
        });
    };
    PlaylistPage.prototype.getIdentidadToken = function () {
        var _this = this;
        this._usuarioService.getIdentidadConToken().subscribe(function (response) {
            var result = response;
            _this.identidad = result.usuario;
            console.log("This.identidad", result.usuario);
            if (_this.usuario.id != _this.identidad.id) {
                _this.verSeguida();
            }
        });
    };
    PlaylistPage.prototype.verSeguida = function () {
        var _this = this;
        console.log("Ver seguidaaaa");
        this._playlistService.verSeguida(this.token, this.id).subscribe(function (response) {
            console.log("LASIGO", response);
            _this.laSigo = true;
        }, function (error) {
            console.log(error);
            _this.laSigo = false;
        });
    };
    PlaylistPage.prototype.seguirPlaylist = function () {
        var _this = this;
        this._playlistService.seguirPlaylist(this.token, this.id).subscribe(function (response) {
            _this.laSigo = true;
        });
    };
    PlaylistPage.prototype.dejarSeguirPlaylist = function () {
        var _this = this;
        this._playlistService.dejarSeguirPlaylist(this.token, this.id).subscribe(function (response) {
            _this.laSigo = false;
        }, function (error) {
            console.log(error);
        });
    };
    PlaylistPage.prototype.administrarColaCanciones = function (cancion) {
        this.cola = Object.assign([], this.canciones);
        for (var i = 0; i < this.cola.length; i++) {
            if (this.cola[i].id == cancion.id) {
                this.cola.splice(i, 1);
                break;
            }
        }
        this._reproductorService.establecerCola(this.cola);
    };
    PlaylistPage.prototype.compararCancion = function (id) {
        if (!this._reproductorService.cancion_sonando)
            return false;
        else
            return id == this._reproductorService.cancion_sonando.id;
    };
    PlaylistPage.prototype.reproducirCancion = function (cancion) {
        this._reproductorService.establecerCancion(cancion);
        //this._reproductorService.es_album = true
        //this._reproductorService.obtenerAlbumArtista(cancion.id)
        this._reproductorService.reproduciendo = true;
        this._reproductorService.sonando = true;
        this._reproductorService.playCancion();
        this.administrarColaCanciones(cancion);
    };
    PlaylistPage.prototype.primeraMayuscula = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    PlaylistPage.prototype.opciones = function (cancion) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: cancion.nombre,
            buttons: [
                {
                    text: 'Añadir a cola',
                    role: 'destructive',
                    handler: function () {
                        _this._reproductorService.addCancionCola(cancion);
                    }
                },
                {
                    text: 'Añadir a Playlist',
                    handler: function () {
                        var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__lista_playlists_lista_playlists__["a" /* ListaPlaylistsPage */], {
                            'cancion': cancion
                        });
                        popover.present({});
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PlaylistPage.prototype.opcionesPlaylist = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opciones de playlist',
            buttons: [
                {
                    text: 'Modificar nombre',
                    handler: function () {
                        _this.modificarPlaylist();
                    }
                },
                {
                    text: 'Borrar playlist',
                    role: 'destructive',
                    handler: function () {
                        _this._playlistService.borrarPlaylist(_this.token, _this.playlist).subscribe(function (response) {
                            _this.presentToast("Se ha borrado correctamente");
                            _this.navCtrl.pop();
                        }, function (error) {
                            _this.presentToast("Hay un error al borrar playlist");
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PlaylistPage.prototype.presentToast = function (texto) {
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PlaylistPage.prototype.modificarPlaylist = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Modificar Playlist',
            inputs: [
                {
                    name: 'nombre_playlist',
                    placeholder: 'Nuevo nombre de la playlist',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Modificar playlist',
                    handler: function (data) {
                        var resultado = data;
                        console.log(resultado.nombre_playlist);
                        var copia_playist = _this.playlist;
                        copia_playist.nombre = data.nombre_playlist;
                        _this._playlistService.editarPlaylist(_this.token, copia_playist).subscribe(function (response) {
                            _this.playlist.nombre = copia_playist.nombre;
                            _this.presentToast("Se ha actualizado correctamente");
                        }, function (error) {
                            _this.presentToast("No se ha actualizado correctamente");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PlaylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playlist',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\playlist\playlist.html"*/'\n<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title *ngIf="playlist">{{playlist.nombre}}</ion-title>\n    <ion-buttons end  *ngIf="laSigo==null"><button (click)="opcionesPlaylist()" ion-button  >  <ion-icon name="more"></ion-icon></button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-style">\n  <div center text-center *ngIf="laSigo!=null">\n      <button ion-button round outline color="secondary" *ngIf="laSigo!=false" (click)="dejarSeguirPlaylist()">Dejar de Seguir</button>\n      <button ion-button round outline color="secondary" *ngIf="laSigo==false" (click)="seguirPlaylist()" >Seguir</button>\n  </div>\n\n  <h1>Canciones:</h1>\n  <ion-list class="bg-style">\n    <ion-item class="bg-style" *ngFor="let cancion of canciones"  [ngStyle]="{\n      \'color\': compararCancion(cancion.id) ? \'red\':\'white\'\n  }">\n        <ion-icon item-left ion-left name="ios-play" (click)="reproducirCancion(cancion)"></ion-icon>\n        <div text-center><strong>{{primeraMayuscula(cancion.nombre)}}</strong> - &nbsp;{{cancion.duracion}}</div> \n        <ion-icon item-right ion-right (click)="opciones(cancion)"name="ios-more"></ion-icon>\n\n      </ion-item>\n\n  </ion-list>\n\n  <div style="padding-bottom:5.6rem;">\n\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\playlist\playlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_4__services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_5__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PlaylistPage);
    return PlaylistPage;
}());

//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_registro__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_usuario__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usuario_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Modelo Usuario

//Servicios

//Pagina TAB

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, _userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this.todo = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__models_usuario__["a" /* Usuario */]('', '', '', '', '', '', '');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.abrirRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.usuario.email = this.todo.controls.email.value;
        this.usuario.password = this.todo.controls.password.value;
        this._userService.login(this.usuario, 'true').subscribe(function (response) {
            var resultado = response;
            console.log(resultado);
            _this._userService.setToken(resultado.token);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="login">\n  \n    <ion-row class="logo-row">\n        <ion-col></ion-col>\n        <ion-col width-67>\n          <h1 class="titulo">UGRFY</h1>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n\n      <div class="login-box">\n          <form   [formGroup]="todo">\n            <ion-row>\n              <ion-col>\n                <ion-list inset>\n                  \n                  <ion-item>\n                    <ion-input type="text" formControlName="email" placeholder="Email:" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" name="email"  required></ion-input>\n                  </ion-item>\n                  \n                  <ion-item>\n                    <ion-input type="password" formControlName="password" placeholder="Contraseña:" name="password"  required></ion-input>\n                  </ion-item>\n                  \n                </ion-list>\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col class="signup-col">\n                <button ion-button class="submit-btn" full type="submit" (click)="login()" [disabled]="!todo.valid">Inicia sesión</button>\n                <button ion-button class="register-btn" block clear (click)="abrirRegistro()" >Crear una cuenta</button>\n              </ion-col>\n            </ion-row>\n            <p style="color:white"text-center>¿Has olvidado contraseña? <span ><strong>Recordar</strong></span></p>\n          </form>\n        </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_usuario_service__["a" /* UsuarioService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancionService = /** @class */ (function () {
    function CancionService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__GLOBAL_service__["a" /* GLOBAL */].url;
    }
    CancionService.prototype.getCancion = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'get-cancion/' + id, { headers: headers });
    };
    CancionService.prototype.getCanciones = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        if (id == null) {
            return this.http.get(this.url + 'get-canciones/', { headers: headers });
        }
        else {
            return this.http.get(this.url + 'get-canciones-album/' + id, { headers: headers });
        }
    };
    CancionService.prototype.filtrarCanciones = function (token, valor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + 'filtrar-canciones/' + valor, { headers: headers });
    };
    CancionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CancionService);
    return CancionService;
}());

//# sourceMappingURL=cancion.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artistas_artistas__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlists_playlists__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buscar_buscar__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datos_datos__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(_ServicioReproductor, ref) {
        var _this = this;
        this._ServicioReproductor = _ServicioReproductor;
        this.ref = ref;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__artistas_artistas__["a" /* ArtistasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__playlists_playlists__["a" /* PlaylistsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__buscar_buscar__["a" /* BuscarPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__datos_datos__["a" /* DatosPage */];
        setInterval(function () {
            if (!_this.ref.destroyed) {
                _this.ref.detectChanges();
            }
        }, 1500);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\tabs\tabs.html"*/'\n\n\n<ion-toolbar style="bottom:5.6rem;position:fixed;z-index:10;"  *ngIf="_ServicioReproductor.reproduciendo">\n        <page-reproductor></page-reproductor>\n\n</ion-toolbar>\n\n\n\n<ion-tabs color="gris" class="tabs"  >\n    \n    <ion-tab [root]="tab1Root"   tabTitle="Inicio" tabIcon="home" ></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Artistas" tabIcon="ios-microphone"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Playlists" tabIcon="md-list"></ion-tab>\n    <ion-tab [root]="tab4Root"tabTitle="Buscar" tabIcon="ios-search"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Mi cuenta" tabIcon="md-person"></ion-tab>\n  \n</ion-tabs>\n\n\n\n\n'/*ion-inline-end:"C:\Users\FRAJE\Desktop\TFG\appTFG\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_reproductor_service__["a" /* ReproductorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map