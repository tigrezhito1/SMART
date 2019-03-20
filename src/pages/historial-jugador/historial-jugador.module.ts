import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialJugadorPage } from './historial-jugador';

@NgModule({
  declarations: [
    HistorialJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialJugadorPage),
  ],
})
export class HistorialJugadorPageModule {}
