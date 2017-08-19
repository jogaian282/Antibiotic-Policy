import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the BloodstreaminfectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloodstreaminfection',
  templateUrl: 'bloodstreaminfection.html',
})
export class BloodstreaminfectionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodstreaminfectionPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  } 
}
