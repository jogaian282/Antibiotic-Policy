import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,ModalController,ViewController } from 'ionic-angular';
import { ResInfecTablePage } from '../res-infec-table/res-infec-table';

@IonicPage()
@Component({
  selector: 'page-respiratory-infection',
  templateUrl: 'respiratory-infection.html',
})
export class RespiratoryInfectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public viewCtrl: ViewController,
  public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespiratoryInfectionPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
