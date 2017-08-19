import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ResInfecTablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-res-infec-table',
  templateUrl: 'res-infec-table.html',
})
export class ResInfecTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResInfecTablePage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
