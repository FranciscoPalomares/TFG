import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPlaylistsPage } from './lista-playlists';

@NgModule({
  declarations: [
    ListaPlaylistsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPlaylistsPage),
  ],
})
export class ListaPlaylistsPageModule {}
