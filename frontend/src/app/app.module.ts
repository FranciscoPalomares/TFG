import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {EditarUsuarioComponent} from './components/editar-usuario.component';
import {routing, appRoutingProviders} from './app.routing';
import {ArtistListComponent} from './components/artistas-lista.component';
import {HomeComponent} from './components/home.component';
import {ArtistAddComponent} from './components/artista-add.component';
import {ArtistEditComponent} from './components/editar-artista.component';
import {ArtistDetailsComponent} from './components/detalles-artista.component';
import {AlbumAddComponent} from './components/album-add.component';
import {AlbumEditarComponent} from './components/album-editar.component';
import {AlbumDetallesComponent} from './components/album-detalles.component';
import {CancionAddComponent} from './components/cancion-add.component';
import {CancionEditarComponent} from './components/cancion-editar.component';
import {ReproductorComponent} from './components/reproductor.component';
import {ColaService} from './services/cola.service';
import { SortablejsModule } from 'angular-sortablejs';

import {RestablecerContrasenaComponent} from './components/restablecer-contrasena.component';
import { RestablecercontrasenaComponent } from './restablecercontrasena/restablecercontrasena.component';
import { InicioComponent } from './inicio/inicio.component';

//Playlist
import {PlaylistAddComponent} from './components/playlist-add.component'
import {PlaylistDetalleComponent} from './components/playlist-detalles.component'
import {PlaylistsComponent} from './components/playlists.component'
import {PlaylistEditarComponent} from './components/editar-playlist.component'

//NOTIFICACIONES
import { NotifierModule } from 'angular-notifier';


//Buscador
import {BuscarComponent} from './components/buscar.component'

//INFO USUARIO
import {InfoUsuarioComponent} from './components/info-usuario.component'


import { DragScrollModule } from 'ngx-drag-scroll';


//HTTPINCEPTOR
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/interceptor';


import {UserService} from './services/usuario.service';
import {IdentidadService} from './services/identidad.service';
@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    ArtistListComponent,
    HomeComponent,
    ArtistAddComponent,
    ArtistEditComponent,
    ArtistDetailsComponent,
    AlbumAddComponent,
    AlbumEditarComponent,
    AlbumDetallesComponent,
    CancionAddComponent,
    CancionEditarComponent,
    ReproductorComponent,
    RestablecerContrasenaComponent,
    RestablecercontrasenaComponent,
    InicioComponent,
    PlaylistAddComponent,
    PlaylistDetalleComponent,
    PlaylistsComponent,
    PlaylistEditarComponent,
    BuscarComponent,
    InfoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NotifierModule,
    DragScrollModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [appRoutingProviders,UserService,IdentidadService,ColaService,{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
