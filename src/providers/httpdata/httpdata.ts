import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpdataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpdataProvider {
 // private headers = new Headers({'Content-Type': 'application/json'});
  public headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  url = 'http://api.jisuapi.com/express/query';
  constructor(public http: Http) {
    console.log('Hello HttpdataProvider Provider');
  }

  
  getData(datas: any): Promise<any>{
            let url = this.url;
            // let params={
            //   appkey:"c3a5422350fee1eb",
            //    type:"auto",
            //    number:datas
            // }
              url +="?appkey=c3a5422350fee1eb&type=auto&number="+ datas;
           // let data = JSON.stringify(params);
           return this.http.get(url,{headers:this.headers}).toPromise();
         
    }
    newTitle():Promise<any>{
      let url = 'http://api.jisuapi.com/news/channel'
      url +='?appkey=c3a5422350fee1eb';
      return this.http.get(url,{headers:this.headers}).toPromise();
    }

    newsContent(indexdata,page):Promise<any>{
      let url = 'http://api.jisuapi.com/news/get'
      // let params={
      //   channel:indexdata,
      //   start:page,
      //   num:10,
      //   appkey:"c3a5422350fee1eb"
      // }
      url +='?appkey=c3a5422350fee1eb&channel='+indexdata+'&start='+page+'&num=10';
      return this.http.get(url,{headers:this.headers}).toPromise();
    }

}
