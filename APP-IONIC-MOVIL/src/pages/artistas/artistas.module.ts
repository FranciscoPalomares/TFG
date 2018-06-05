import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistasPage } from './artistas';

@NgModule({
  declarations: [
    ArtistasPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistasPage),
  ],
})
export class ArtistasPageModule {}
