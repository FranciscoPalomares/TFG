import { Component,ChangeDetectorRef ,ViewRef } from '@angular/core';


import { HomePage } from '../home/home';
import {ArtistasPage} from '../artistas/artistas';
import {PlaylistsPage} from '../playlists/playlists';
import {BuscarPage} from '../buscar/buscar';
import {DatosPage} from '../datos/datos';

import {ReproductorService} from '../../services/reproductor.service'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArtistasPage;
  tab3Root = PlaylistsPage;
  tab4Root = BuscarPage;
  tab5Root = DatosPage;

  constructor(private _ServicioReproductor:ReproductorService,private ref: ChangeDetectorRef,) {
     setInterval(() => {
      if(!(this.ref as ViewRef).destroyed) {
        this.ref.detectChanges();
      }
    }, 1500);
  }
}
