import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HistorialPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html'
})
export class HistorialPage {

  historialJugadorRoot = 'HistorialJugadorPage'
  historialJuegoRoot = 'HistorialJuegoPage'
  hiatorialLogueoRoot = 'HiatorialLogueoPage'


  constructor(public navCtrl: NavController) {}

}
