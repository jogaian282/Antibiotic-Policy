import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { OpdPolicyPage } from '../pages/opd-policy/opd-policy';
import { ListPage } from '../pages/list/list';
import {RiskFactorsPage} from '../pages/risk-factors/risk-factors';
import {GuidelinesPage} from '../pages/guidelines/guidelines';
import {OpdvardPage} from '../pages/opdvard/opdvard';
//import {BloodstreaminfectionPage} from '../pages/bloodstreaminfection/bloodstreaminfection';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'OPD Policy',component: OpdPolicyPage},
      { title: 'List', component: ListPage },
      { title: 'Risk Factors', component: RiskFactorsPage },
      { title: 'OPD Policy Ward', component: OpdvardPage },
      { title: 'GuideLines', component: GuidelinesPage }
    ];

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
    this.nav.setRoot(page.component);
  }

}
