import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController,Platform } from 'ionic-angular';
import { RespiratoryInfectionPage } from '../respiratory-infection/respiratory-infection';
//import { SoftTissueInfectionPage } from '../soft-tissue-infection/soft-tissue-infection';
//import { UrinaryTractInfectionPage } from '../urinary-tract-infection/urinary-tract-infection';
@IonicPage()
@Component({
  selector: 'page-opd-policy',
  templateUrl: 'opd-policy.html',
})

export class OpdPolicyPage {

  myIndex: number = 0;

  // tab1Root = RespiratoryInfectionPage;
  // tab2Root = SoftTissueInfectionPage;
  // tab3Root = UrinaryTractInfectionPage;
  // tab4Root = BloodstreaminfectionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public alert: AlertController,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdPolicyPage');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(RespiratoryInfectionPage, characterNum);
    modal.present();
  }
exit(){
      let alert = this.alert.create({
        title: 'Confirm',
        message: 'Do you want to exit?',
        buttons: [{
          text: "exit?",
          handler: () => { this.exitApp() }
        }, {
          text: "Cancel",
          role: 'cancel'
        }]
      })
      alert.present();
  }
  exitApp(){
    this.platform.exitApp();
  }
}
