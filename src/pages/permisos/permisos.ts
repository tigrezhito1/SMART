import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PermisosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-permisos',
  templateUrl: 'permisos.html'
})
export class PermisosPage {

  adminClubRoot = 'AdminClubPage'
  entrenadorRoot = 'EntrenadorPage'
  asistenteRoot = 'AsistentePage'


  constructor(public navCtrl: NavController) {}

}
