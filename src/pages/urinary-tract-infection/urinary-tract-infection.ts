import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { UrinarytractInfecTablePage } from '../urinarytract-infec-table/urinarytract-infec-table';
/**
 * Generated class for the UrinaryTractInfectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urinary-tract-infection',
  templateUrl: 'urinary-tract-infection.html',
})
export class UrinaryTractInfectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrinaryTractInfectionPage');
  }
urinary()
{
  const root = this.app.getRootNav();
    root.push(UrinarytractInfecTablePage);
}
}
