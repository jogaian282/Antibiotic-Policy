import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the UrinarytractInfecTablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urinarytract-infec-table',
  templateUrl: 'urinarytract-infec-table.html',
})
export class UrinarytractInfecTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrinarytractInfecTablePage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
