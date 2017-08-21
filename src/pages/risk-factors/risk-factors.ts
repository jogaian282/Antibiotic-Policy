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
pet: string = "puppies";
  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App,public modalCtrl: ModalController) {
  }
openModal(characterNum) {
    let modal = this.modalCtrl.create(RiskContentPage, characterNum);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskFactorsPage');
  }

}
