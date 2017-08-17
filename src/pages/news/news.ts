import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Slides,Events,LoadingController } from 'ionic-angular';
import { HttpdataProvider } from '../../providers/httpdata/httpdata';
import { NewcontentPage } from '../newcontent/newcontent';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public pageSlides: string[];
  public pageIndex: number = 0;
  public pageContent: string;  
  @ViewChild(Slides) slides: Slides;
  newsArray = new Array();
  page = 0;
  indexdata = "头条";
  lodding:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events:Events,
              public loadingCtrl: LoadingController,
              public Httpdata:HttpdataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.lodding = this.loadingCtrl.create({
      content: '正在加载...'
    });
    this.lodding.present();
    this.Httpdata.newTitle().then(res=>{
      console.log( res.json())
        this.pageSlides = res.json().result;
    }).catch(error=>{

    })
    this.addList()
  }

  onSlideClick(index) {
    console.log(index)
    this.indexdata = this.pageSlides[index];
    this.page = 1;
    this.addList()
  }

  doRefresh(refresher) {
    this.page = 0;

    this.addList();
     refresher.complete();
  }
  addList(){
    this.Httpdata.newsContent(this.indexdata,this.page).then(res=>{
        let list = res.json();
        console.log(list)
        this.newsArray = list.result.list;
        this.lodding.dismiss();
    }).catch(error=>{

    })
  }
  listContent(item){
    this.navCtrl.push(NewcontentPage,{news:item})
  }

  doInfinitebut(infiniteScroll){
    this.lodding = this.loadingCtrl.create({
      content: '正在加载...'
    });
    this.lodding.present();
    this.page++;
    console.log(this.indexdata+"=="+this.page)
    this.Httpdata.newsContent(this.indexdata,this.page).then(res=>{
      let list = res.json();
      console.log(list.result.list)
      this.newsArray = this.newsArray.concat(list.result.list)
      this.lodding.dismiss();
      console.log(this.newsArray)
      infiniteScroll.complete();
    }).catch(error=>{

    })
    }
    

}
