import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoJuegoPage } from './nuevo-juego';

@NgModule({
  declarations: [
    NuevoJuegoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoJuegoPage),
  ],
})
export class NuevoJuegoPageModule {}
