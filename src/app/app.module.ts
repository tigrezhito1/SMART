import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Storage } from '@ionic/storage';
import {IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';

import { JuegoPage } from '../pages/juego/juego';
import { JugadoresPage } from '../pages/jugadores/jugadores';

import { PermisosPage } from '../pages/permisos/permisos';

import { PersonalPage } from '../pages/personal/personal';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';



import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
  HistorialPage,
  PermisosPage,
  JuegoPage,
  JugadoresPage,
  PersonalPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
  HistorialPage,
  PermisosPage,
  JuegoPage,
  JugadoresPage,
  PersonalPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
