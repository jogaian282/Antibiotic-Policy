import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
//import { HomePage } from '../pages/home/home';
import { OpdPolicyPage } from '../pages/opd-policy/opd-policy';
import { RiskFactorsPage } from '../pages/risk-factors/risk-factors';
import { RiskContentPage } from '../pages/risk-content/risk-content';
import { GuidecontentPage } from '../pages/guidecontent/guidecontent';
// import { GuidelinesPage } from '../pages/guidelines/guidelines';
import { OpdvardPage } from '../pages/opdvard/opdvard';
import { ResInfecTablePage } from '../pages/res-infec-table/res-infec-table';
import { SofttisueInfecTablePage } from '../pages/softtisue-infec-table/softtisue-infec-table';
import { UrinarytractInfecTablePage } from '../pages/urinarytract-infec-table/urinarytract-infec-table';
import { BloodstreaminfectionPage } from '../pages/bloodstreaminfection/bloodstreaminfection';

//import {BloodstreaminfectionPage} from '../pages/bloodstreaminfection/bloodstreaminfection';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{ title: string, iconName: string, pageName: any, contentPage: any }> = [];
  // pages: Array<{ title: string, component: any }>;
  // p1: Array<{ title: string, component: any }>;
  // p11: Array<{ title: string, component: any }>;
  // p2: Array<{ title: string, component: any }>;
  // p12: Array<{ title: string, component: any }>;
  // p13: Array<{ title: string, component: any }>;
  // p14: Array<{ title: string, component: any }>;


  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController, public appCtrl: App) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: "OPD Policy",
        iconName: "clipboard",
        pageName: [{
          name:"Opd Policy",
          id:0
        }],
        contentPage: OpdPolicyPage
      },
      {
        title: "Risk Factors",
        iconName: "construct",
        pageName: [
          {
            name: "MDR/Health",
            id:0
          },
          { name: "Fungemia",
        id:1
        }
        ],
        contentPage: RiskFactorsPage
      }
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page);
    this.nav.setRoot(page.contentPage);
    // this.appCtrl.getRootNav().setRoot(page.contentPage);
  }

  // openModal(characterNum) {
  //   console.log(characterNum);

  //   let modal = this.modalCtrl.create(GuidecontentPage, characterNum);
  //   modal.present();
  // }

}
