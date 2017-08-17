import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the NewcontentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newcontent',
  templateUrl: 'newcontent.html',
})
export class NewcontentPage {
  title:any;
  time:any;
  content:any;
  data:any;
  imgsrc:any;
  Isimg:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public DomSanitizer:DomSanitizer) {
    this.data = this.navParams.get('news');
    this.Isimg = false;
  }

  ionViewDidLoad() {
    console.log(this.data);
    console.log(this.data.title)
    this.title = this.data.title;
    this.time = this.data.time;
    this.content = this.DomSanitizer.bypassSecurityTrustHtml(this.data.content);
     
    if(this.data.pic != ""){
      this.imgsrc = this.data.pic;
      this.Isimg = true;
    }else{
     
    }
    
    

  }

}
