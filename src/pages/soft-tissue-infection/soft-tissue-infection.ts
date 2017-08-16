import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { SofttisueInfecTablePage } from '../softtisue-infec-table/softtisue-infec-table';
/**
 * Generated class for the SoftTissueInfectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soft-tissue-infection',
  templateUrl: 'soft-tissue-infection.html',
})
export class SoftTissueInfectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftTissueInfectionPage');
  }
  softtissue()
  {
     const root = this.app.getRootNav();
    root.push(SofttisueInfecTablePage);
  }

}
