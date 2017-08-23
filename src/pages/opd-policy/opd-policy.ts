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
shownGroup = null;
  myIndex: number = 0;
diseases=[
{title: 'Respiratory Infection',
        res1: 'Type I - Amo xycillin / Clavulanate +/- Macrolide',
        res2: '(or)',
        res3:'Oral cephalosporins (for specific limited indication)',
        res4:'(or)',
        res5:'Resp. Fluroquinolones alone (Conserve for important uses)'
},
      {
        title: 'Soft Tissue Infection',
        res1: 'Type I - Amoxycillin / Clavulanate (or) Linezolid (if MRSA suspected)',
        res2: 'or',
        res3:'Clindamycin + / - Fluroquinolones',
        res4:'',
        res5:''
      },
      {
        title: 'Urinary Tract Infection',
        res1: 'Type I -Nitrofurantoin or Co-trimoxazole',
        res2: '(or)',
        res3:'Fluroquinolones (Conserve for important uses other than acute cystitis)',
        res4:'',
        res5:''
      } 



];
  // tab1Root = RespiratoryInfectionPage;
  // tab2Root = SoftTissueInfectionPage;
  // tab3Root = UrinaryTractInfectionPage;
  // tab4Root = BloodstreaminfectionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public alert: AlertController,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdPolicyPage');
  }

 toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

}
