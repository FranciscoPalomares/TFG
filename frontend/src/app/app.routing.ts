import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importamos el componente
import {EditarUsuarioComponent} from './components/editar-usuario.component';
import { AppComponent } from './app.component';
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
import {RestablecerContrasenaComponent} from './components/restablecer-contrasena.component';


import {InicioComponent} from './inicio/inicio.component';
import {RestablecercontrasenaComponent} from './restablecercontrasena/restablecercontrasena.component';


//Playlist

import {PlaylistAddComponent} from './components/playlist-add.component'
import {PlaylistDetalleComponent} from './components/playlist-detalles.component'
import {PlaylistsComponent} from './components/playlists.component'
import {PlaylistEditarComponent} from './components/editar-playlist.component'


//Buscar
import {BuscarComponent} from './components/buscar.component'

//INFO USUARIO
import {InfoUsuarioComponent} from './components/info-usuario.component'

const appRoutes: Routes =[


  {path: 'restablecer-contrasena/:token',component:RestablecercontrasenaComponent},
  {path:'',component:InicioComponent,children:[

  {path: '',component: HomeComponent},
  {path:'mis-datos',component: EditarUsuarioComponent},
  {path:'artistas',component: ArtistListComponent},
  {path:'artista/:id',component: ArtistDetailsComponent},
  {path:'crear-artista',component: ArtistAddComponent},
  {path:'editar-artista/:id',component: ArtistEditComponent},
  {path:'crear-album/:artista',component: AlbumAddComponent},
  {path:'editar-album/:id',component: AlbumEditarComponent},
  {path:'album/:id',component: AlbumDetallesComponent},
  {path:'crear-cancion/:id',component: CancionAddComponent},
  {path:'editar-cancion/:id',component: CancionEditarComponent},
  {path:'crear-playlist',component: PlaylistAddComponent},
  {path:'playlist/:id',component: PlaylistDetalleComponent},
  {path:'editar-playlist/:id',component: PlaylistEditarComponent},
  {path:'playlists',component: PlaylistsComponent},
  {path:'buscar',component: BuscarComponent},
  {path:'usuario/:id',component: InfoUsuarioComponent},
  ]},

  {path:'**',redirectTo:''}

  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
