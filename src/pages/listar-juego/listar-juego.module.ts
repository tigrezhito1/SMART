import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarJuegoPage } from './listar-juego';

@NgModule({
  declarations: [
    ListarJuegoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarJuegoPage),
  ],
})
export class ListarJuegoPageModule {}
