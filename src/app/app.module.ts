import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ExpressPage } from '../pages/express/express';
import { NewsPage } from '../pages/news/news';
import { NewcontentPage } from '../pages/newcontent/newcontent';
import { CaipuPage } from '../pages/caipu/caipu';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpdataProvider } from '../providers/httpdata/httpdata';
import { MySlideyComponent } from '../components/my-slidey/my-slidey';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ExpressPage,
    TabsPage,
    NewcontentPage,
    NewsPage,
    MySlideyComponent,
    CaipuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{backButtonText:'返回',iconMode: 'ios',}), 
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ExpressPage,
    NewcontentPage,
    TabsPage,
    NewsPage,
    CaipuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpdataProvider
  ]
})
export class AppModule {}
