import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,ModalController,ViewController } from 'ionic-angular';

/**
 * Generated class for the GuidecontentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guidecontent',
  templateUrl: 'guidecontent.html',
})
export class GuidecontentPage {
character;
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public viewCtrl: ViewController,
  public modalCtrl:ModalController) {

var characters = [
      {
        title: `The following criteria has been proposed for initiating Colistin
        `,
        res1: `1.Pan-resistant organism as per culture
report with evidence of invasive disease-fever/leuococytosis/
elevated Procalcitonin (PCT) or culture from a sterile site
        `,
        res2:`2.Clinical failure of all other classes of antibiotics over 72 hours`,
        res3:`3.Colistin to be given with loading does in combination with 
        beta lactum class of antibiotics
        `,
        res4:'',
        res5:'',
        res6:'',
        res7:''
      },
      {
        title: 'The following criteria has been proposed to protect the Carbapenems and Linezolid from overuse',
        res1: `1.Severe sepsis as defined by more than one organ failure of new onset and / or elevated 
serum lactate
        `,
        res2: `2.Clinical failure of other classes of antibiotics over 48 hours in terms of
worsening inflammatory markers, unresolving fever and new / worsening hemodynamic instability          
        `,
        res3:`3.Underlying severe immuno - supperssion - Neutropenea, immuno-suppressive therapy,Diabetic ketoacidosis (DKA)
        etc
        `,
        res4:`4.The organism is susceptible to only carbapenems/linezolid,as per culture report
        `,
        res5:'',
        res6:'',
        res7:''
      },
      {
        title: 'Some guiding principles for de-escalation/Escalation:',
        res1: `
        1.If ESBL +ve:drug choice is monotheraphy with carbepenems. Preferably choose
        group I carbepenem. Piperacillin-Tazobactum and Cefoperazone-Sulbactum can
        be used if in-vitro sensitive and for mild infections
        `,
        res2: `2.Vancomycin should be used only for confirmed MRSA infections and not in MSSA 
        infections
        `,
        res3:`3.In case of Pan drug resistant Pseudomonas / Acinetobacter spp. Combination 
        therapy uisng colistin along with beta-lactams (using PK/PD principles)should be discussed with microbiologist
        /physician 
        `,
        res4:'',
        res5:'',
        res6:'',
        res7:''
      },
      {
        title: 'Indications for Carbapenem use:',
        res1: `1.Infections (e.g., bacteremia, pyelonephritis, intra-abdominal infections 
        , peritonitis, cholangitis, abscesses), nosocomia Pnneumonia etc.) confirmed (by appropriate
        culture and susceptibility studies) to be caused by Gram-negative bacteria (E coli,
        Klebsiella spp., Enterobacter spp.,Pseudomonas aeruginosa, other non-fermenting Gram-negative bacilli)
        resistant to other classes of antimicrobials and susceptible only to carbapenems in-vitro        
        `,
        res2: `2.Initial empiric treatment for severe, life-threatening infections 
        (associated with multi-organ dysfunction, septic shock) caused by Gram-negative bacteria.
        `,
        res3:`* Febrile neutropenia`
        ,
        res4:`*ventilator associated / nosocomial pneumonia`,
        res5:`*Pyelonephritis / complicated urinary tract infections`,
        res6:`*Complicated intra - abdominal infections`,
        res7:`Once the culture and susceptibility reports are available,choose the most appropriate
        antibiotic based on spectrum of activity, toxicity and cost (de-escalation)
        `
      },
      {
        title: 'Reference:',
        res1: 'National Treatment Guidelines for Antimicrobial.',
        res2: 'Ministry in infectious Diseases (2016).',
        res3:'Ministry of Health & Family Welfare Government of india.',
        res4:'',
        res5:'',
        res6:'',
        res7:''
        
      }

    ];
    this.character = characters[this.navParams.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidecontentPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }
}
