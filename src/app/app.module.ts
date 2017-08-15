import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { OpdPolicyPage } from '../pages/opd-policy/opd-policy';
import { RespiratoryInfectionPage } from '../pages/respiratory-infection/respiratory-infection';
import { ResInfecTablePage } from '../pages/res-infec-table/res-infec-table';
import { SoftTissueInfectionPage } from '../pages/soft-tissue-infection/soft-tissue-infection';
import { UrinaryTractInfectionPage } from '../pages/urinary-tract-infection/urinary-tract-infection';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    OpdPolicyPage,
    RespiratoryInfectionPage,
    ResInfecTablePage,
    SoftTissueInfectionPage,
    UrinaryTractInfectionPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top',tabsHideOnSubPages: true}),
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
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
