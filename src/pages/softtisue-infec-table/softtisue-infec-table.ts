import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SofttisueInfecTablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-softtisue-infec-table',
  templateUrl: 'softtisue-infec-table.html',
})
export class SofttisueInfecTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SofttisueInfecTablePage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
