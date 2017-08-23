import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,App,ViewController } from 'ionic-angular';
import {RiskContentPage} from '../risk-content/risk-content';
/**
 * Generated class for the RiskFactorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-factors',
  templateUrl: 'risk-factors.html',
})
export class RiskFactorsPage {
  riskContent:boolean = false;
risk=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App,public modalCtrl: ModalController) {
this.risk=[
  {
title:`Broad spectrum antibiotics within 90 d hospitalization >5 d local high antibiotic resistance rates residence in LTCF chronic
    dialysis within 30 d home wound care family member with MDR infection mechanical ventilation =5 d immunosuppression structural
    lung disease IV drug use`
  },
  {
title:`Broad spectrum antibiotics within 90 d hospitalization >5 d local high antibiotic resistance rates residence in LTCF chronic
    dialysis within 30 d home wound care family member with MDR infection mechanical ventilation =5 d immunosuppression structural
    lung disease IV dtug use`
  }
]    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskFactorsPage');
  }

}
