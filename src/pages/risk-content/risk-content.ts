import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the RiskContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-content',
  templateUrl: 'risk-content.html',
})
export class RiskContentPage {
character;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

    var characters = [
      {

        head:'MDR /Health-care associated pathogens',
        name: `broad spectrum antibiotics within 90 d hospitalization 
        >5 d local high antibiotic resistance rates residence in LTCF 
        chronic dialysis within 30 d home wound care family member with MDR infection mechanical 
        ventilation =5 d immunosuppression structural lung disease IV dtug use`
      },
      {
        head:'Fungemia',
        name: `broad spectrum antibiotics central venous catheter 
        parenteral nutrition renal replacement therapy in 
        ICU neutropenia hematologic malignancy implantable prosthetic devices 
        immunosuppression chemotherapy`
      }
    ];
    this.character = characters[this.navParams.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskContentPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

}
