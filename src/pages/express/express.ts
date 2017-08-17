import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController,LoadingController} from 'ionic-angular';
import { HttpdataProvider } from '../../providers/httpdata/httpdata';



@Component({
  selector: 'page-express',
  templateUrl: 'express.html',
})
export class ExpressPage {
  Orderdata:string;
  ListData = new Array();
  adddata:string;
  Isshow :any;
  loading:any;
  toast : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public Httpdata:HttpdataProvider,
              public loadingCtrl:LoadingController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpressPage');
    this.Isshow = false;
  }
  querydata(){
     this.loading = this.loadingCtrl.create({
    content: '正在查询...'
  });
  this.loading.present();
    
    let str = this.Orderdata;
    window.localStorage.setItem('adddata',str);
    this.Httpdata.getData(str).then(res =>{
        var data  = res.json();
        console.log(data)
         this.loading.dismiss();
        let msg = "";
        if(data.status == 0){
            msg = "查询成功";
            this.ListData = data.result.list;
        }else{
            msg = data.msg;
        }
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
          });
          this.toast.present();
    }).catch(erroe=>{
      this.toast.present();
    })

  }
  Lately(){
    this.Orderdata = this.adddata;
    this.querydata();
  }

  onclicks() { 
   let latey = window.localStorage.getItem('adddata');
   console.log(latey)
    if(latey ==null||latey==""||latey == undefined){
      this.Isshow = false;
    }else{
      this.Isshow = true;
      this.adddata = latey;
    }
  }
  
}
