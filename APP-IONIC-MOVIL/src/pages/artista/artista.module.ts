import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistaPage } from './artista';

@NgModule({
  declarations: [
    ArtistaPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistaPage),
  ],
})
export class ArtistaPageModule {}
