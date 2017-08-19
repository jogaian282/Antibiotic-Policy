import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,ModalController,ViewController } from 'ionic-angular';
import { ResInfecTablePage } from '../res-infec-table/res-infec-table';

@IonicPage()
@Component({
  selector: 'page-respiratory-infection',
  templateUrl: 'respiratory-infection.html',
})
export class RespiratoryInfectionPage {
 character;
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public viewCtrl: ViewController,
  public modalCtrl:ModalController) {


var characters = [
      {
        title: 'Respiratory Infection',
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
    this.character = characters[this.navParams.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespiratoryInfectionPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
