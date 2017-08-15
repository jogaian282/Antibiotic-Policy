import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { ResInfecTablePage } from '../res-infec-table/res-infec-table';

@IonicPage()
@Component({
  selector: 'page-respiratory-infection',
  templateUrl: 'respiratory-infection.html',
})
export class RespiratoryInfectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespiratoryInfectionPage');
  }

  resInfecTable(){
    const root = this.app.getRootNav();
    root.push(ResInfecTablePage);
  }

}
