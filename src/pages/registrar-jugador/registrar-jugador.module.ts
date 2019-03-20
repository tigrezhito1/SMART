import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarJugadorPage } from './registrar-jugador';

@NgModule({
  declarations: [
    RegistrarJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarJugadorPage),
  ],
})
export class RegistrarJugadorPageModule {}
