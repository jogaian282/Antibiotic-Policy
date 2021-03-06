import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
//import { HomePage } from '../pages/home/home';
import { OpdPolicyPage } from '../pages/opd-policy/opd-policy';
import { RespiratoryInfectionPage } from '../pages/respiratory-infection/respiratory-infection';
import { ResInfecTablePage } from '../pages/res-infec-table/res-infec-table';
import { SoftTissueInfectionPage } from '../pages/soft-tissue-infection/soft-tissue-infection';
import { UrinaryTractInfectionPage } from '../pages/urinary-tract-infection/urinary-tract-infection';
import { SofttisueInfecTablePage } from '../pages/softtisue-infec-table/softtisue-infec-table';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UrinarytractInfecTablePage} from '../pages/urinarytract-infec-table/urinarytract-infec-table';
import {BloodstreaminfectionPage} from '../pages/bloodstreaminfection/bloodstreaminfection';
import {RiskFactorsPage} from '../pages/risk-factors/risk-factors';
import {RiskContentPage} from '../pages/risk-content/risk-content';
import {OpdvardPage} from '../pages/opdvard/opdvard';
import {GuidelinesPage} from '../pages/guidelines/guidelines';
import {GuidecontentPage} from '../pages/guidecontent/guidecontent';
@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    //HomePage,
    OpdPolicyPage,
    RespiratoryInfectionPage,
    ResInfecTablePage,
    SoftTissueInfectionPage,
    UrinaryTractInfectionPage,
    SofttisueInfecTablePage,
    UrinarytractInfecTablePage,
    BloodstreaminfectionPage,
    RiskFactorsPage,
    RiskContentPage,
    OpdvardPage,
    GuidelinesPage,
    GuidecontentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    OpdPolicyPage,
    RespiratoryInfectionPage,
    ResInfecTablePage,
    SoftTissueInfectionPage,
    UrinaryTractInfectionPage,
   // HomePage,
   
     SofttisueInfecTablePage,
     UrinarytractInfecTablePage,
     BloodstreaminfectionPage,
     RiskFactorsPage,
     RiskContentPage,
     OpdvardPage,
     GuidelinesPage,GuidecontentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
