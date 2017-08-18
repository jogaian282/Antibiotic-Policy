import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {ResInfecTablePage} from '../res-infec-table/res-infec-table';
import {SofttisueInfecTablePage} from '../softtisue-infec-table/softtisue-infec-table';
import {UrinarytractInfecTablePage} from '../urinarytract-infec-table/urinarytract-infec-table';
import {BloodstreaminfectionPage} from '../bloodstreaminfection/bloodstreaminfection';
/**
 * Generated class for the OpdvardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opdvard',
  templateUrl: 'opdvard.html',
})
export class OpdvardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdvardPage');
  }
resp1()
{
let modal = this.modalCtrl.create(ResInfecTablePage);
    modal.present();
}
  resp2()
{
let modal = this.modalCtrl.create(SofttisueInfecTablePage);
    modal.present();
}

resp3()
{
let modal = this.modalCtrl.create(UrinarytractInfecTablePage);
    modal.present();
}

resp4()
{
let modal = this.modalCtrl.create(BloodstreaminfectionPage);
    modal.present();
}

}
