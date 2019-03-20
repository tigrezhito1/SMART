import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the JugadoresPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html'
})
export class JugadoresPage {

  registrarJugadorRoot = 'RegistrarJugadorPage'
  litarJugadorRoot = 'LitarJugadorPage'


  constructor(public navCtrl: NavController) {}

}
