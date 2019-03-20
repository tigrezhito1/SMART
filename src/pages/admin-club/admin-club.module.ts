import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminClubPage } from './admin-club';

@NgModule({
  declarations: [
    AdminClubPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminClubPage),
  ],
})
export class AdminClubPageModule {}
