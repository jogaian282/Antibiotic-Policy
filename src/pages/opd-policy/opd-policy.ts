import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RespiratoryInfectionPage } from '../respiratory-infection/respiratory-infection';
import { SoftTissueInfectionPage } from '../soft-tissue-infection/soft-tissue-infection';
import { UrinaryTractInfectionPage } from '../urinary-tract-infection/urinary-tract-infection';
import {BloodstreaminfectionPage} from '../bloodstreaminfection/bloodstreaminfection';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdPolicyPage');
  }

  items = ['RESPIRATORY INFECTION',
    'SOFT TISSUE INFECTION',
    'URINARY TRACT INFECTION',
    'BLOOD STREAM INFECTION'
  ];

  itemSelected(item) {
    // console.log(item);
    if(item=="RESPIRATORY INFECTION")
      {
let modal = this.modalCtrl.create(RespiratoryInfectionPage);
modal.present();
      }
    else if(item=="SOFT TISSUE INFECTION")
      {
let modal = this.modalCtrl.create(SoftTissueInfectionPage);
modal.present();
      }
    else if(item=="URINARY TRACT INFECTION")
      {
let modal = this.modalCtrl.create(UrinaryTractInfectionPage);
modal.present();
      }
    else if(item=="BLOOD STREAM INFECTION")
      {
let modal = this.modalCtrl.create(BloodstreaminfectionPage);
modal.present();
      }

    
  }


}
