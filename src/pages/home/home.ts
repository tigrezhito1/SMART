import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { HistorialPage } from '../historial/historial';

import { PermisosPage } from '../permisos/permisos';

import { JuegoPage } from '../juego/juego';

import { JugadoresPage } from '../jugadores/jugadores';

import { PersonalPage } from '../personal/personal';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


 historialPage() {
    this.navCtrl.push(HistorialPage);
  }

  permisosPage() {
     this.navCtrl.push(PermisosPage);
   }

   juegoPage() {
      this.navCtrl.push(JuegoPage);
    }

    jugadoresPage() {
       this.navCtrl.push(JugadoresPage);
    }

  personalPage() {
        this.navCtrl.push(PersonalPage);
    }


  selec:any;
  estado:any;
  colormemoria:any='light'
  p:any;
  activasecuencia:any=true;
  activoarea:any=false;
  grabando:any=false;
  pastillas:any= ['A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','C1','C2','C3','C4','C5','C6','C7','C8','D1','D2','D3','D4','D5','D6','D7','D8','E1','E2','E3','E4','F1','F2','F3','F4','G1','G2','G3','G4','H1','H2','H3','H4','I1','I2','I3','I4','J1','J2','J3','J4','K1','K2','K3','K4','L1','L2','L3','L4','M1','M2','M3','M4','N1','N2','N3','N4','NN1','NN2','NN3','NN4','O1','O2','O3','O4','P1','P2','P3','P4','Q1','Q2','Q3','Q4','R1','R2','R3','R4','S1','S2','S3','S4','T1','T2','T3','T4','T5','T6','T7','T8','U1','U2','U3','U4','U5','U6','U7','U8','V1','V2','V3','V4','V5','V6','V7','V8'];

  cuartoarco:any=['D4','D5','D6','D7','D8','E4','F4','G4','H4','I4','J4','K4','L4','M4','�4','O4','P4','R4','S4','S5','S6','S7','S8']

  A1:any;A2:any;A3:any;A4:any;A5:any;A6:any;A7:any;A8:any;
  B1:any;B2:any;B3:any;B4:any;B5:any;B6:any;B7:any;B8:any;
  C1:any;C2:any;C3:any;C4:any;C5:any;C6:any;C7:any;C8:any;
  D1:any;D2:any;D3:any;D4:any;D5:any;D6:any;D7:any;D8:any;
  E1:any;E2:any;E3:any;E4:any;
  F1:any;F2:any;F3:any;F4:any;
  G1:any;G2:any;G3:any;G4:any;
  H1:any;H2:any;H3:any;H4:any;
  I1:any;I2:any;I3:any;I4:any;
  J1:any;J2:any;J3:any;J4:any;
  K1:any;K2:any;K3:any;K4:any;
  L1:any;L2:any;L3:any;L4:any;
  M1:any;M2:any;M3:any;M4:any;
  N1:any;N2:any;N3:any;N4:any;
  NN1:any;NN2:any;NN3:any;NN4:any;
  O1:any;O2:any;O3:any;O4:any;
  P1:any;P2:any;P3:any;P4:any;
  Q1:any;Q2:any;Q3:any;Q4:any;
  R1:any;R2:any;R3:any;R4:any;
  S1:any;S2:any;S3:any;S4:any;
  T1:any;T2:any;T3:any;T4:any;T5:any;T6:any;T7:any;T8:any;
  U1:any;U2:any;U3:any;U4:any;U5:any;U6:any;U7:any;U8:any;
  V1:any;V2:any;V3:any;V4:any;V5:any;V6:any;V7:any;V8:any;







  constructor(public storage: Storage,public navCtrl: NavController,public events: Events,private screenOrientation: ScreenOrientation) {



    console.log(this.events)


    this.events.publish('user:created', 'user', Date.now());

  }






 somethingMoved(event) {
    console.log(event);


  }

   selecciona(event) {


    if (this.estado=='Inicia'){

      this.pintacuadrados(event)

    }


  }


  inicia(event,data){


    this.A1=false;this.A2=false;this.A3=false;this.A4=false;this.A5=false;this.A6=false;this.A7=false;this.A8=false;
    this.B1=false;this.B2=false;this.B3=false;this.B4=false;this.B5=false;this.B6=false;this.B7=false;this.B8=false;
    this.C1=false;this.C2=false;this.C3=false;this.C4=false;this.C5=false;this.C6=false;this.C7=false;this.C8=false;
    this.C1=false;this.C2=false;this.C3=false;this.C4=false;this.C5=false;this.C6=false;this.C7=false;this.C8=false;
    this.E1=false;this.E2=false;this.E3=false;this.E4=false;
    this.F1=false;this.F2=false;this.F3=false;this.F4=false;
    this.G1=false;this.G2=false;this.G3=false;this.G4=false;
    this.H1=false;this.H2=false;this.H3=false;this.H4=false;
    this.I1=false;this.I2=false;this.I3=false;this.I4=false;
    this.J1=false;this.J2=false;this.J3=false;this.J4=false;
    this.K1=false;this.K2=false;this.K3=false;this.K4=false;
    this.L1=false;this.L2=false;this.L3=false;this.L4=false;
    this.M1=false;this.M2=false;this.M3=false;this.M4=false;
    this.N1=false;this.N2=false;this.N3=false;this.N4=false;
    this.NN1=false;this.NN2=false;this.NN3=false;this.NN4=false;
    this.O1=false;this.O2=false;this.O3=false;this.O4=false;
    this.P1=false;this.P2=false;this.P3=false;this.P4=false;
    this.Q1=false;this.Q2=false;this.Q3=false;this.Q4=false;
    this.R1=false;this.R2=false;this.R3=false;this.R4=false;
    this.S1=false;this.S2=false;this.S3=false;this.S4=false;
    this.T1=false;this.T2=false;this.T3=false;this.T4=false;this.T5=false;this.T6=false;this.T7=false;this.T8=false;
    this.U1=false;this.U2=false;this.U3=false;this.U4=false;this.U5=false;this.U6=false;this.U7=false;this.U8=false;
    this.V1=false;this.V2=false;this.V3=false;this.V4=false;this.V5=false;this.V6=false;this.V7=false;this.V8=false;



    this.estado=event

    this.pintacuadrados(data)


  }


  area(){

    this.activoarea=true

    this.A1=false;this.A2=false;this.A3=false;this.A4=false;this.A5=false;this.A6=false;this.A7=false;this.A8=false;this.B1=false;this.B2=false;this.B3=false;this.B4=false;this.B5=false;this.B6=false;this.B7=false;this.B8=false;this.C1=false;this.C2=false;this.C3=false;this.C4=false;this.C5=false;this.C6=false;this.C7=false;this.C8=false;this.D1=false;this.D2=false;this.D3=false;this.D4=false;this.D5=false;this.D6=false;this.D7=false;this.D8=false;this.E1=false;this.E2=false;this.E3=false;this.F1=false;this.F2=false;this.F3=false;this.G1=false;this.G2=false;this.G3=false;this.H1=false;this.H2=false;this.H3=false;this.I1=false;this.I2=false;this.I3=false;this.J1=false;this.J2=false;this.J3=false;this.K1=false;this.K2=false;this.K3=false;this.L1=false;this.L2=false;this.L3=false;this.M1=false;this.M2=false;this.M3=false;this.N1=false;this.N2=false;this.N3=false;this.NN1=false;this.NN2=false;this.NN3=false;this.O1=false;this.O2=false;this.O3=false;this.P1=false;this.P2=false;this.P3=false;this.Q1=false;this.Q2=false;this.Q3=false;this.R1=false;this.R2=false;this.R3=false;this.S1=false;this.S2=false;this.S3=false;this.T1=false;this.T2=false;this.T3=false;this.T4=false;this.T5=false;this.T6=false;this.T7=false;this.U1=false;this.U2=false;this.U3=false;this.T3=false;this.T3=false;this.U6=false;this.U7=false;this.V1=false;this.V2=false;this.V3=false;this.V4=false;this.V5=false;this.V6=false;this.V7=false;this.V8=false;

  }


parararea(){

this.activoarea=false

this.A1=false;this.A2=false;this.A3=false;this.A4=false;this.A5=false;this.A6=false;this.A7=false;this.A8=false;this.B1=false;this.B2=false;this.B3=false;this.B4=false;this.B5=false;this.B6=false;this.B7=false;this.B8=false;this.C1=false;this.C2=false;this.C3=false;this.C4=false;this.C5=false;this.C6=false;this.C7=false;this.C8=false;this.D1=false;this.D2=false;this.D3=false;this.D4=false;this.D5=false;this.D6=false;this.D7=false;this.D8=false;this.E1=false;this.E2=false;this.E3=false;this.F1=false;this.F2=false;this.F3=false;this.G1=false;this.G2=false;this.G3=false;this.H1=false;this.H2=false;this.H3=false;this.I1=false;this.I2=false;this.I3=false;this.J1=false;this.J2=false;this.J3=false;this.K1=false;this.K2=false;this.K3=false;this.L1=false;this.L2=false;this.L3=false;this.M1=false;this.M2=false;this.M3=false;this.N1=false;this.N2=false;this.N3=false;this.NN1=false;this.NN2=false;this.NN3=false;this.O1=false;this.O2=false;this.O3=false;this.P1=false;this.P2=false;this.P3=false;this.Q1=false;this.Q2=false;this.Q3=false;this.R1=false;this.R2=false;this.R3=false;this.S1=false;this.S2=false;this.S3=false;this.T1=false;this.T2=false;this.T3=false;this.T4=false;this.T5=false;this.T6=false;this.T7=false;this.U1=false;this.U2=false;this.U3=false;this.T3=false;this.T3=false;this.U6=false;this.U7=false;this.V1=false;this.V2=false;this.V3=false;this.V4=false;this.V5=false;this.V6=false;this.V7=false;this.V8=false;


}


secuencia(){

   this.activasecuencia=true

}

parasecuencia(){

   this.activasecuencia=false

}



  finaliza(event){


    this.estado=event

    //Guarda Memoria

    if (this.grabando==true){

    if(this.A1==true){this.storage.set('A1',true)};if(this.A2==true){this.storage.set('A2',true)};if(this.A3==true){this.storage.set('A3',true)};if(this.A4==true){this.storage.set('A4',true)};if(this.A5==true){this.storage.set('A5',true)};if(this.A6==true){this.storage.set('A6',true)};if(this.A7==true){this.storage.set('A7',true)};if(this.A8==true){this.storage.set('A8',true)};if(this.B1==true){this.storage.set('B1',true)};if(this.B2==true){this.storage.set('B2',true)};if(this.B3==true){this.storage.set('B3',true)};if(this.B4==true){this.storage.set('B4',true)};if(this.B5==true){this.storage.set('B5',true)};if(this.B6==true){this.storage.set('B6',true)};if(this.B7==true){this.storage.set('B7',true)};if(this.B8==true){this.storage.set('B8',true)};if(this.C1==true){this.storage.set('C1',true)};if(this.C2==true){this.storage.set('C2',true)};if(this.C3==true){this.storage.set('C3',true)};if(this.C4==true){this.storage.set('C4',true)};if(this.C5==true){this.storage.set('C5',true)};if(this.C6==true){this.storage.set('C6',true)};if(this.C7==true){this.storage.set('C7',true)};if(this.C8==true){this.storage.set('C8',true)};if(this.D1==true){this.storage.set('D1',true)};if(this.D2==true){this.storage.set('D2',true)};if(this.D3==true){this.storage.set('D3',true)};if(this.D4==true){this.storage.set('D4',true)};if(this.D5==true){this.storage.set('D5',true)};if(this.D6==true){this.storage.set('D6',true)};if(this.D7==true){this.storage.set('D7',true)};if(this.D8==true){this.storage.set('D8',true)};if(this.E1==true){this.storage.set('E1',true)};if(this.E2==true){this.storage.set('E2',true)};if(this.E3==true){this.storage.set('E3',true)};if(this.F1==true){this.storage.set('F1',true)};if(this.F2==true){this.storage.set('F2',true)};if(this.F3==true){this.storage.set('F3',true)};if(this.G1==true){this.storage.set('G1',true)};if(this.G2==true){this.storage.set('G2',true)};if(this.G3==true){this.storage.set('G3',true)};if(this.H1==true){this.storage.set('H1',true)};if(this.H2==true){this.storage.set('H2',true)};if(this.H3==true){this.storage.set('H3',true)};if(this.I1==true){this.storage.set('I1',true)};if(this.I2==true){this.storage.set('I2',true)};if(this.I3==true){this.storage.set('I3',true)};if(this.J1==true){this.storage.set('J1',true)};if(this.J2==true){this.storage.set('J2',true)};if(this.J3==true){this.storage.set('J3',true)};if(this.K1==true){this.storage.set('K1',true)};if(this.K2==true){this.storage.set('K2',true)};if(this.K3==true){this.storage.set('K3',true)};if(this.L1==true){this.storage.set('L1',true)};if(this.L2==true){this.storage.set('L2',true)};if(this.L3==true){this.storage.set('L3',true)};if(this.M1==true){this.storage.set('M1',true)};if(this.M2==true){this.storage.set('M2',true)};if(this.M3==true){this.storage.set('M3',true)};if(this.N1==true){this.storage.set('N1',true)};if(this.N2==true){this.storage.set('N2',true)};if(this.N3==true){this.storage.set('N3',true)};if(this.NN1==true){this.storage.set('NN1',true)};if(this.NN2==true){this.storage.set('NN2',true)};if(this.NN3==true){this.storage.set('NN3',true)};if(this.O1==true){this.storage.set('O1',true)};if(this.O2==true){this.storage.set('O2',true)};if(this.O3==true){this.storage.set('O3',true)};if(this.P1==true){this.storage.set('P1',true)};if(this.P2==true){this.storage.set('P2',true)};if(this.P3==true){this.storage.set('P3',true)};if(this.Q1==true){this.storage.set('Q1',true)};if(this.Q2==true){this.storage.set('Q2',true)};if(this.Q3==true){this.storage.set('Q3',true)};if(this.R1==true){this.storage.set('R1',true)};if(this.R2==true){this.storage.set('R2',true)};if(this.R3==true){this.storage.set('R3',true)};if(this.S1==true){this.storage.set('S1',true)};if(this.S2==true){this.storage.set('S2',true)};if(this.S3==true){this.storage.set('S3',true)};if(this.T1==true){this.storage.set('T1',true)};if(this.T2==true){this.storage.set('T2',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T6==true){this.storage.set('T6',true)};if(this.T7==true){this.storage.set('T7',true)};if(this.U1==true){this.storage.set('U1',true)};if(this.U2==true){this.storage.set('U2',true)};if(this.U3==true){this.storage.set('U3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.U6==true){this.storage.set('U6',true)};if(this.U7==true){this.storage.set('U7',true)};if(this.V1==true){this.storage.set('V1',true)};if(this.V2==true){this.storage.set('V2',true)};if(this.V3==true){this.storage.set('V3',true)};if(this.V4==true){this.storage.set('V4',true)};if(this.V5==true){this.storage.set('V5',true)};if(this.V6==true){this.storage.set('V6',true)};if(this.V7==true){this.storage.set('V7',true)};if(this.V7==true){this.storage.set('V7',true)};

    }


  }


  pintacuadrados(event){


    if(event=='A1'){this.A1=true};if(event=='A2'){this.A2=true};if(event=='A3'){this.A3=true};if(event=='A4'){this.A4=true};if(event=='A5'){this.A5=true};if(event=='A6'){this.A6=true};if(event=='A7'){this.A7=true};if(event=='A8'){this.A8=true}
    if(event=='B1'){this.B1=true};if(event=='B2'){this.B2=true};if(event=='B3'){this.B3=true};if(event=='B4'){this.B4=true};if(event=='B5'){this.B5=true};if(event=='B6'){this.B6=true};if(event=='B7'){this.B7=true};if(event=='B8'){this.B8=true}
    if(event=='C1'){this.C1=true};if(event=='C2'){this.C2=true};if(event=='C3'){this.C3=true};if(event=='C4'){this.C4=true};if(event=='C5'){this.C5=true};if(event=='C6'){this.C6=true};if(event=='C7'){this.C7=true};if(event=='C8'){this.C8=true}
    if(event=='D1'){this.D1=true};if(event=='D2'){this.D2=true};if(event=='D3'){this.D3=true};if(event=='D4'){this.D4=true};if(event=='D5'){this.D5=true};if(event=='D6'){this.D6=true};if(event=='D7'){this.D7=true};if(event=='D8'){this.D8=true}
    if(event=='E1'){this.E1=true};if(event=='E2'){this.E2=true};if(event=='E3'){this.E4=true}
    if(event=='F1'){this.F1=true};if(event=='F2'){this.F2=true};if(event=='F3'){this.F4=true}
    if(event=='G1'){this.G1=true};if(event=='G2'){this.G2=true};if(event=='G3'){this.G4=true}
    if(event=='H1'){this.H1=true};if(event=='H2'){this.H2=true};if(event=='H3'){this.H4=true}
    if(event=='I1'){this.I1=true};if(event=='I2'){this.I2=true};if(event=='I3'){this.I4=true}
    if(event=='J1'){this.J1=true};if(event=='J2'){this.J2=true};if(event=='J3'){this.J4=true}
    if(event=='K1'){this.K1=true};if(event=='K2'){this.K2=true};if(event=='K3'){this.K4=true}
    if(event=='L1'){this.L1=true};if(event=='L2'){this.L2=true};if(event=='L3'){this.L4=true}
    if(event=='M1'){this.M1=true};if(event=='M2'){this.M2=true};if(event=='M3'){this.M4=true}
    if(event=='N1'){this.N1=true};if(event=='N2'){this.N2=true};if(event=='N3'){this.N4=true}
    if(event=='NN1'){this.NN1=true};if(event=='NN2'){this.NN2=true};if(event=='NN3'){this.NN4=true}
    if(event=='O1'){this.O1=true};if(event=='O2'){this.O2=true};if(event=='O3'){this.O4=true}
    if(event=='P1'){this.P1=true};if(event=='P2'){this.P2=true};if(event=='P3'){this.P4=true}
    if(event=='Q1'){this.Q1=true};if(event=='Q2'){this.Q2=true};if(event=='Q3'){this.Q4=true}
    if(event=='R1'){this.R1=true};if(event=='R2'){this.R2=true};if(event=='R3'){this.R4=true}
    if(event=='S1'){this.S1=true};if(event=='S2'){this.S2=true};if(event=='S3'){this.S4=true}
    if(event=='T1'){this.T1=true};if(event=='T2'){this.T2=true};if(event=='T3'){this.T3=true};if(event=='T4'){this.T4=true};if(event=='T5'){this.T5=true};if(event=='T6'){this.T6=true};if(event=='T7'){this.T8=true}
    if(event=='U1'){this.U1=true};if(event=='U2'){this.U2=true};if(event=='U3'){this.U3=true};if(event=='U4'){this.U4=true};if(event=='U5'){this.U5=true};if(event=='U6'){this.U6=true};if(event=='U7'){this.U8=true}
    if(event=='V1'){this.V1=true};if(event=='V2'){this.V2=true};if(event=='V3'){this.V3=true};if(event=='V4'){this.V4=true};if(event=='V5'){this.V5=true};if(event=='V6'){this.V6=true};if(event=='V7'){this.V8=true}


  }


getCurrentScreen0rientation(){

  console.log(this.screenOrientation.type)

}


async lockScreen0rientation()

{
  try {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

      }catch(error)

    {
    console.error(error)

    }

    }

unlockScreen0rientation()
{
this.screenOrientation.unlock();

}

ionViewDidLoad() {
    this.grabando=false
  }


parar(){

  this.grabando=false

  //this.storage.set('A1',false);this.storage.set('A2',false);this.storage.set('A3',false);this.storage.set('A4',false);this.storage.set('A5',false);this.storage.set('A6',false);this.storage.set('A7',false);this.storage.set('A8',false);this.storage.set('B1',false);this.storage.set('B2',false);this.storage.set('B3',false);this.storage.set('B4',false);this.storage.set('B5',false);this.storage.set('B6',false);this.storage.set('B7',false);this.storage.set('B8',false);this.storage.set('C1',false);this.storage.set('C2',false);this.storage.set('C3',false);this.storage.set('C4',false);this.storage.set('C5',false);this.storage.set('C6',false);this.storage.set('C7',false);this.storage.set('C8',false);this.storage.set('D1',false);this.storage.set('D2',false);this.storage.set('D3',false);this.storage.set('D4',false);this.storage.set('D5',false);this.storage.set('D6',false);this.storage.set('D7',false);this.storage.set('D8',false);this.storage.set('E1',false);this.storage.set('E2',false);this.storage.set('E3',false);this.storage.set('F1',false);this.storage.set('F2',false);this.storage.set('F3',false);this.storage.set('G1',false);this.storage.set('G2',false);this.storage.set('G3',false);this.storage.set('H1',false);this.storage.set('H2',false);this.storage.set('H3',false);this.storage.set('I1',false);this.storage.set('I2',false);this.storage.set('I3',false);this.storage.set('J1',false);this.storage.set('J2',false);this.storage.set('J3',false);this.storage.set('K1',false);this.storage.set('K2',false);this.storage.set('K3',false);this.storage.set('L1',false);this.storage.set('L2',false);this.storage.set('L3',false);this.storage.set('M1',false);this.storage.set('M2',false);this.storage.set('M3',false);this.storage.set('N1',false);this.storage.set('N2',false);this.storage.set('N3',false);this.storage.set('NN1',false);this.storage.set('NN2',false);this.storage.set('NN3',false);this.storage.set('O1',false);this.storage.set('O2',false);this.storage.set('O3',false);this.storage.set('P1',false);this.storage.set('P2',false);this.storage.set('P3',false);this.storage.set('Q1',false);this.storage.set('Q2',false);this.storage.set('Q3',false);this.storage.set('R1',false);this.storage.set('R2',false);this.storage.set('R3',false);this.storage.set('S1',false);this.storage.set('S2',false);this.storage.set('S3',false);this.storage.set('T1',false);this.storage.set('T2',false);this.storage.set('T3',false);this.storage.set('T4',false);this.storage.set('T5',false);this.storage.set('T6',false);this.storage.set('T7',false);this.storage.set('U1',false);this.storage.set('U2',false);this.storage.set('U3',false);this.storage.set('T3',false);this.storage.set('T3',false);this.storage.set('U6',false);this.storage.set('U7',false);this.storage.set('V1',false);this.storage.set('V2',false);this.storage.set('V3',false);this.storage.set('V4',false);this.storage.set('V5',false);this.storage.set('V6',false);this.storage.set('V7',false);this.storage.set('V8',false);

}

memoria(){

console.log('data---.',this.grabando)
 this.storage.set('A1',false);this.storage.set('A2',false);this.storage.set('A3',false);this.storage.set('A4',false);this.storage.set('A5',false);this.storage.set('A6',false);this.storage.set('A7',false);this.storage.set('A8',false);this.storage.set('B1',false);this.storage.set('B2',false);this.storage.set('B3',false);this.storage.set('B4',false);this.storage.set('B5',false);this.storage.set('B6',false);this.storage.set('B7',false);this.storage.set('B8',false);this.storage.set('C1',false);this.storage.set('C2',false);this.storage.set('C3',false);this.storage.set('C4',false);this.storage.set('C5',false);this.storage.set('C6',false);this.storage.set('C7',false);this.storage.set('C8',false);this.storage.set('D1',false);this.storage.set('D2',false);this.storage.set('D3',false);this.storage.set('D4',false);this.storage.set('D5',false);this.storage.set('D6',false);this.storage.set('D7',false);this.storage.set('D8',false);this.storage.set('E1',false);this.storage.set('E2',false);this.storage.set('E3',false);this.storage.set('F1',false);this.storage.set('F2',false);this.storage.set('F3',false);this.storage.set('G1',false);this.storage.set('G2',false);this.storage.set('G3',false);this.storage.set('H1',false);this.storage.set('H2',false);this.storage.set('H3',false);this.storage.set('I1',false);this.storage.set('I2',false);this.storage.set('I3',false);this.storage.set('J1',false);this.storage.set('J2',false);this.storage.set('J3',false);this.storage.set('K1',false);this.storage.set('K2',false);this.storage.set('K3',false);this.storage.set('L1',false);this.storage.set('L2',false);this.storage.set('L3',false);this.storage.set('M1',false);this.storage.set('M2',false);this.storage.set('M3',false);this.storage.set('N1',false);this.storage.set('N2',false);this.storage.set('N3',false);this.storage.set('NN1',false);this.storage.set('NN2',false);this.storage.set('NN3',false);this.storage.set('O1',false);this.storage.set('O2',false);this.storage.set('O3',false);this.storage.set('P1',false);this.storage.set('P2',false);this.storage.set('P3',false);this.storage.set('Q1',false);this.storage.set('Q2',false);this.storage.set('Q3',false);this.storage.set('R1',false);this.storage.set('R2',false);this.storage.set('R3',false);this.storage.set('S1',false);this.storage.set('S2',false);this.storage.set('S3',false);this.storage.set('T1',false);this.storage.set('T2',false);this.storage.set('T3',false);this.storage.set('T4',false);this.storage.set('T5',false);this.storage.set('T6',false);this.storage.set('T7',false);this.storage.set('U1',false);this.storage.set('U2',false);this.storage.set('U3',false);this.storage.set('T3',false);this.storage.set('T3',false);this.storage.set('U6',false);this.storage.set('U7',false);this.storage.set('V1',false);this.storage.set('V2',false);this.storage.set('V3',false);this.storage.set('V4',false);this.storage.set('V5',false);this.storage.set('V6',false);this.storage.set('V7',false);this.storage.set('V8',false);

this.grabando=true


}

guardamemoria(){

  if(this.A1==true){this.storage.set('A1',true)};if(this.A2==true){this.storage.set('A2',true)};if(this.A3==true){this.storage.set('A3',true)};if(this.A4==true){this.storage.set('A4',true)};if(this.A5==true){this.storage.set('A5',true)};if(this.A6==true){this.storage.set('A6',true)};if(this.A7==true){this.storage.set('A7',true)};if(this.A8==true){this.storage.set('A8',true)};if(this.B1==true){this.storage.set('B1',true)};if(this.B2==true){this.storage.set('B2',true)};if(this.B3==true){this.storage.set('B3',true)};if(this.B4==true){this.storage.set('B4',true)};if(this.B5==true){this.storage.set('B5',true)};if(this.B6==true){this.storage.set('B6',true)};if(this.B7==true){this.storage.set('B7',true)};if(this.B8==true){this.storage.set('B8',true)};if(this.C1==true){this.storage.set('C1',true)};if(this.C2==true){this.storage.set('C2',true)};if(this.C3==true){this.storage.set('C3',true)};if(this.C4==true){this.storage.set('C4',true)};if(this.C5==true){this.storage.set('C5',true)};if(this.C6==true){this.storage.set('C6',true)};if(this.C7==true){this.storage.set('C7',true)};if(this.C8==true){this.storage.set('C8',true)};if(this.D1==true){this.storage.set('D1',true)};if(this.D2==true){this.storage.set('D2',true)};if(this.D3==true){this.storage.set('D3',true)};if(this.D4==true){this.storage.set('D4',true)};if(this.D5==true){this.storage.set('D5',true)};if(this.D6==true){this.storage.set('D6',true)};if(this.D7==true){this.storage.set('D7',true)};if(this.D8==true){this.storage.set('D8',true)};if(this.E1==true){this.storage.set('E1',true)};if(this.E2==true){this.storage.set('E2',true)};if(this.E3==true){this.storage.set('E3',true)};if(this.F1==true){this.storage.set('F1',true)};if(this.F2==true){this.storage.set('F2',true)};if(this.F3==true){this.storage.set('F3',true)};if(this.G1==true){this.storage.set('G1',true)};if(this.G2==true){this.storage.set('G2',true)};if(this.G3==true){this.storage.set('G3',true)};if(this.H1==true){this.storage.set('H1',true)};if(this.H2==true){this.storage.set('H2',true)};if(this.H3==true){this.storage.set('H3',true)};if(this.I1==true){this.storage.set('I1',true)};if(this.I2==true){this.storage.set('I2',true)};if(this.I3==true){this.storage.set('I3',true)};if(this.J1==true){this.storage.set('J1',true)};if(this.J2==true){this.storage.set('J2',true)};if(this.J3==true){this.storage.set('J3',true)};if(this.K1==true){this.storage.set('K1',true)};if(this.K2==true){this.storage.set('K2',true)};if(this.K3==true){this.storage.set('K3',true)};if(this.L1==true){this.storage.set('L1',true)};if(this.L2==true){this.storage.set('L2',true)};if(this.L3==true){this.storage.set('L3',true)};if(this.M1==true){this.storage.set('M1',true)};if(this.M2==true){this.storage.set('M2',true)};if(this.M3==true){this.storage.set('M3',true)};if(this.N1==true){this.storage.set('N1',true)};if(this.N2==true){this.storage.set('N2',true)};if(this.N3==true){this.storage.set('N3',true)};if(this.NN1==true){this.storage.set('NN1',true)};if(this.NN2==true){this.storage.set('NN2',true)};if(this.NN3==true){this.storage.set('NN3',true)};if(this.O1==true){this.storage.set('O1',true)};if(this.O2==true){this.storage.set('O2',true)};if(this.O3==true){this.storage.set('O3',true)};if(this.P1==true){this.storage.set('P1',true)};if(this.P2==true){this.storage.set('P2',true)};if(this.P3==true){this.storage.set('P3',true)};if(this.Q1==true){this.storage.set('Q1',true)};if(this.Q2==true){this.storage.set('Q2',true)};if(this.Q3==true){this.storage.set('Q3',true)};if(this.R1==true){this.storage.set('R1',true)};if(this.R2==true){this.storage.set('R2',true)};if(this.R3==true){this.storage.set('R3',true)};if(this.S1==true){this.storage.set('S1',true)};if(this.S2==true){this.storage.set('S2',true)};if(this.S3==true){this.storage.set('S3',true)};if(this.T1==true){this.storage.set('T1',true)};if(this.T2==true){this.storage.set('T2',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T6==true){this.storage.set('T6',true)};if(this.T7==true){this.storage.set('T7',true)};if(this.U1==true){this.storage.set('U1',true)};if(this.U2==true){this.storage.set('U2',true)};if(this.U3==true){this.storage.set('U3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.T3==true){this.storage.set('T3',true)};if(this.U6==true){this.storage.set('U6',true)};if(this.U7==true){this.storage.set('U7',true)};if(this.V1==true){this.storage.set('V1',true)};if(this.V2==true){this.storage.set('V2',true)};if(this.V3==true){this.storage.set('V3',true)};if(this.V4==true){this.storage.set('V4',true)};if(this.V5==true){this.storage.set('V5',true)};if(this.V6==true){this.storage.set('V6',true)};if(this.V7==true){this.storage.set('V7',true)};if(this.V7==true){this.storage.set('V7',true)};

}

iniciofin(){

this.storage.get('A1').then((val)=>{if(val==true){this.A1=true}});this.storage.get('A2').then((val)=>{if(val==true){this.A2=true}});this.storage.get('A3').then((val)=>{if(val==true){this.A3=true}});this.storage.get('A4').then((val)=>{if(val==true){this.A4=true}});this.storage.get('A5').then((val)=>{if(val==true){this.A5=true}});this.storage.get('A6').then((val)=>{if(val==true){this.A6=true}});this.storage.get('A7').then((val)=>{if(val==true){this.A7=true}});this.storage.get('A8').then((val)=>{if(val==true){this.A8=true}});this.storage.get('B1').then((val)=>{if(val==true){this.B1=true}});this.storage.get('B2').then((val)=>{if(val==true){this.B2=true}});this.storage.get('B3').then((val)=>{if(val==true){this.B3=true}});this.storage.get('B4').then((val)=>{if(val==true){this.B4=true}});this.storage.get('B5').then((val)=>{if(val==true){this.B5=true}});this.storage.get('B6').then((val)=>{if(val==true){this.B6=true}});this.storage.get('B7').then((val)=>{if(val==true){this.B7=true}});this.storage.get('B8').then((val)=>{if(val==true){this.B8=true}});this.storage.get('C1').then((val)=>{if(val==true){this.C1=true}});this.storage.get('C2').then((val)=>{if(val==true){this.C2=true}});this.storage.get('C3').then((val)=>{if(val==true){this.C3=true}});this.storage.get('C4').then((val)=>{if(val==true){this.C4=true}});this.storage.get('C5').then((val)=>{if(val==true){this.C5=true}});this.storage.get('C6').then((val)=>{if(val==true){this.C6=true}});this.storage.get('C7').then((val)=>{if(val==true){this.C7=true}});this.storage.get('C8').then((val)=>{if(val==true){this.C8=true}});this.storage.get('D1').then((val)=>{if(val==true){this.D1=true}});this.storage.get('D2').then((val)=>{if(val==true){this.D2=true}});this.storage.get('D3').then((val)=>{if(val==true){this.D3=true}});this.storage.get('D4').then((val)=>{if(val==true){this.D4=true}});this.storage.get('D5').then((val)=>{if(val==true){this.D5=true}});this.storage.get('D6').then((val)=>{if(val==true){this.D6=true}});this.storage.get('D7').then((val)=>{if(val==true){this.D7=true}});this.storage.get('D8').then((val)=>{if(val==true){this.D8=true}});this.storage.get('E1').then((val)=>{if(val==true){this.E1=true}});this.storage.get('E2').then((val)=>{if(val==true){this.E2=true}});this.storage.get('E3').then((val)=>{if(val==true){this.E3=true}});this.storage.get('F1').then((val)=>{if(val==true){this.F1=true}});this.storage.get('F2').then((val)=>{if(val==true){this.F2=true}});this.storage.get('F3').then((val)=>{if(val==true){this.F3=true}});this.storage.get('G1').then((val)=>{if(val==true){this.G1=true}});this.storage.get('G2').then((val)=>{if(val==true){this.G2=true}});this.storage.get('G3').then((val)=>{if(val==true){this.G3=true}});this.storage.get('H1').then((val)=>{if(val==true){this.H1=true}});this.storage.get('H2').then((val)=>{if(val==true){this.H2=true}});this.storage.get('H3').then((val)=>{if(val==true){this.H3=true}});this.storage.get('I1').then((val)=>{if(val==true){this.I1=true}});this.storage.get('I2').then((val)=>{if(val==true){this.I2=true}});this.storage.get('I3').then((val)=>{if(val==true){this.I3=true}});this.storage.get('J1').then((val)=>{if(val==true){this.J1=true}});this.storage.get('J2').then((val)=>{if(val==true){this.J2=true}});this.storage.get('J3').then((val)=>{if(val==true){this.J3=true}});this.storage.get('K1').then((val)=>{if(val==true){this.K1=true}});this.storage.get('K2').then((val)=>{if(val==true){this.K2=true}});this.storage.get('K3').then((val)=>{if(val==true){this.K3=true}});this.storage.get('L1').then((val)=>{if(val==true){this.L1=true}});this.storage.get('L2').then((val)=>{if(val==true){this.L2=true}});this.storage.get('L3').then((val)=>{if(val==true){this.L3=true}});this.storage.get('M1').then((val)=>{if(val==true){this.M1=true}});this.storage.get('M2').then((val)=>{if(val==true){this.M2=true}});this.storage.get('M3').then((val)=>{if(val==true){this.M3=true}});this.storage.get('N1').then((val)=>{if(val==true){this.N1=true}});this.storage.get('N2').then((val)=>{if(val==true){this.N2=true}});this.storage.get('N3').then((val)=>{if(val==true){this.N3=true}});this.storage.get('NN1').then((val)=>{if(val==true){this.NN1=true}});this.storage.get('NN2').then((val)=>{if(val==true){this.NN2=true}});this.storage.get('NN3').then((val)=>{if(val==true){this.NN3=true}});this.storage.get('O1').then((val)=>{if(val==true){this.O1=true}});this.storage.get('O2').then((val)=>{if(val==true){this.O2=true}});this.storage.get('O3').then((val)=>{if(val==true){this.O3=true}});this.storage.get('P1').then((val)=>{if(val==true){this.P1=true}});this.storage.get('P2').then((val)=>{if(val==true){this.P2=true}});this.storage.get('P3').then((val)=>{if(val==true){this.P3=true}});this.storage.get('Q1').then((val)=>{if(val==true){this.Q1=true}});this.storage.get('Q2').then((val)=>{if(val==true){this.Q2=true}});this.storage.get('Q3').then((val)=>{if(val==true){this.Q3=true}});this.storage.get('R1').then((val)=>{if(val==true){this.R1=true}});this.storage.get('R2').then((val)=>{if(val==true){this.R2=true}});this.storage.get('R3').then((val)=>{if(val==true){this.R3=true}});this.storage.get('S1').then((val)=>{if(val==true){this.S1=true}});this.storage.get('S2').then((val)=>{if(val==true){this.S2=true}});this.storage.get('S3').then((val)=>{if(val==true){this.S3=true}});this.storage.get('T1').then((val)=>{if(val==true){this.T1=true}});this.storage.get('T2').then((val)=>{if(val==true){this.T2=true}});this.storage.get('T3').then((val)=>{if(val==true){this.T3=true}});this.storage.get('T3').then((val)=>{if(val==true){this.T3=true}});this.storage.get('T3').then((val)=>{if(val==true){this.T3=true}});this.storage.get('T6').then((val)=>{if(val==true){this.T6=true}});this.storage.get('T7').then((val)=>{if(val==true){this.T7=true}});this.storage.get('U1').then((val)=>{if(val==true){this.U1=true}});this.storage.get('U2').then((val)=>{if(val==true){this.U2=true}});this.storage.get('U3').then((val)=>{if(val==true){this.U3=true}});this.storage.get('T3').then((val)=>{if(val==true){this.T3=true}});this.storage.get('T3').then((val)=>{if(val==true){this.T3=true}});this.storage.get('U6').then((val)=>{if(val==true){this.U6=true}});this.storage.get('U7').then((val)=>{if(val==true){this.U7=true}});this.storage.get('V1').then((val)=>{if(val==true){this.V1=true}});this.storage.get('V2').then((val)=>{if(val==true){this.V2=true}});this.storage.get('V3').then((val)=>{if(val==true){this.V3=true}});this.storage.get('V4').then((val)=>{if(val==true){this.V4=true}});this.storage.get('V5').then((val)=>{if(val==true){this.V5=true}});this.storage.get('V6').then((val)=>{if(val==true){this.V6=true}});this.storage.get('V7').then((val)=>{if(val==true){this.V7=true}});this.storage.get('V8').then((val)=>{if(val==true){this.V7=true}});

}

observeScreen0rientation(){
  this.screenOrientation.onChange().subscribe(
   ()=> console.log("The aplication orientation has changed")
  )

 }

}
