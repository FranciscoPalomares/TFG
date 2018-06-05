import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Reproductor
import {ReproductorPage} from '../pages/reproductor/reproductor'
import {ModalReproductorPage} from '../pages/modal-reproductor/modal-reproductor'


//Servicios
import {ReproductorService} from '../services/reproductor.service'
import {UsuarioService} from '../services/usuario.service'
import {ArtistaService} from '../services/artista.service'
import {AlbumService} from '../services/album.service'
import {CancionService} from '../services/cancion.service'
import {PlaylistService} from '../services/playlist.service'
//LoginPage
import {LoginPage} from '../pages/login/login'


//RegistroPage
import {RegistroPage} from '../pages/registro/registro'

//Otras paginas
import {ArtistasPage} from '../pages/artistas/artistas'
import {PlaylistsPage} from '../pages/playlists/playlists'
import {BuscarPage} from '../pages/buscar/buscar'
import {DatosPage} from '../pages/datos/datos'
import {ArtistaPage} from '../pages/artista/artista'
import {AlbumPage} from '../pages/album/album'
import {ListaPlaylistsPage} from '../pages/lista-playlists/lista-playlists'
import {ModalColaPage} from '../pages/modal-cola/modal-cola'
import {PlaylistPage} from '../pages/playlist/playlist'
import {UsuarioPage} from '../pages/usuario/usuario'


import { HttpClientModule } from '@angular/common/http';
import {NgProgressModule} from 'ng2-progressbar'

// round.pipe.ts
import {Pipe, PipeTransform} from "@angular/core";
 
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


//Controles de musica
import {MusicControls} from '@ionic-native/music-controls'
/**
 *
 */


 //Action camara
 import {ActionSheet} from '@ionic-native/action-sheet'
@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        return Math.round(value);
    }
}
//HTTPINCEPTOR
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../interceptors/interceptor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ArtistasPage,
    ReproductorPage,
    PlaylistsPage,
    BuscarPage,
    DatosPage,
    ModalReproductorPage,
    LoginPage,
    RegistroPage,
    ArtistaPage,
    AlbumPage,
    ModalColaPage,
    PlaylistPage,
    UsuarioPage,
    ListaPlaylistsPage,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ArtistasPage,
    PlaylistsPage,
    BuscarPage,
    DatosPage,
    ReproductorPage,
    ModalReproductorPage,
    LoginPage,
    RegistroPage,
    ArtistaPage,
    AlbumPage,
    PlaylistPage,
    ModalColaPage,
    UsuarioPage,
    ListaPlaylistsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ReproductorService,
    UsuarioService,
    AlbumService,
    ArtistaService,
    CancionService,
    PlaylistService,
    Camera,
    FileTransfer,
    MusicControls,
    ActionSheet,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ]
})
export class AppModule {}
