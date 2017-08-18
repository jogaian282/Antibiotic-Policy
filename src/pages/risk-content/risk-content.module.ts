import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskContentPage } from './risk-content';

@NgModule({
  declarations: [
    RiskContentPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskContentPage),
  ],
})
export class RiskContentPageModule {}
