import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {GuidecontentPage} from '../guidecontent/guidecontent';
/**
 * Generated class for the GuidelinesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guidelines',
  templateUrl: 'guidelines.html',
})
export class GuidelinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidelinesPage');
  }




doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  
 openModal(characterNum) {
    let modal = this.modalCtrl.create(GuidecontentPage, characterNum);
    modal.present();
  }


}
