import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the RiskContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-content',
  templateUrl: 'risk-content.html',
})
export class RiskContentPage {
character;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskContentPage');
  }

}
