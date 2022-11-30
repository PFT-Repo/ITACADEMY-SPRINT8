import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApistarsService {
  list: any[]=[];
  imgList: any[]=[];

  constructor() { 
   //this.getships(1);
    this.getImageships()
  }
  
  getships(n:number) {
    console.log(n);
    let url = new URL('http://localhost:3000/starpi/starships/'+n);
    fetch(url).then(response => response.json()).then(data => this.getList(data.results)
    );
 
  }
  getList(any:any){
    for (let index = 0; index < any.length; index++) {
      this.list[index] = any[index];
    }   
    return this.list;
  } 

  getImageships() {
    fetch('http://localhost:3000/starpi').then(response => response.json()).then(data => this.getImageList(data)
    );
 
  }
  getImageList(any:any){
    console.log(any);
    
    for (let index = 0; index < any.length; index++) {
      this.imgList[index] = any[index];
    }   
     console.log(this.imgList);
    return this.imgList;
  }
}
