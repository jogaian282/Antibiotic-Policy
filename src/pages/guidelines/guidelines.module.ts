import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidelinesPage } from './guidelines';

@NgModule({
  declarations: [
    GuidelinesPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidelinesPage),
  ],
})
export class GuidelinesPageModule {}
