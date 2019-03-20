import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the JuegoPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class JuegoPage {

  nuevoJuegoRoot = 'NuevoJuegoPage'
  listarJuegoRoot = 'ListarJuegoPage'


  constructor(public navCtrl: NavController) {}

}
