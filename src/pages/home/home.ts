import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ExpressPage } from '../express/express';
import { NewsPage } from '../news/news';
import { CaipuPage } from '../caipu/caipu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController) {

  }

  express(){
    this.navCtrl.push(ExpressPage);
  }
  Journalism(){
    this.navCtrl.push(NewsPage);
  }
  caipu(){
    this.navCtrl.push(CaipuPage)
  }

}
