import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApistarsService {
  list: any[]=[];
  imgList: any[]=[];

  constructor() { 
    this.getships();
    this.getImageships()
  }
  
  getships() {
    fetch('https://swapi.py4e.com/api/starships/').then(response => response.json()).then(data => this.getList(data.results)
    );
 
  }
  getList(any:any){
    for (let index = 0; index < any.length; index++) {
      this.list[index] = any[index];
    }   
    return this.list;
  }

  getImageships() {
    fetch('https://starwars-visualguide.com/#/starships?page=1').then(response => response.json()).then(data => console.log( JSON.parse(data))
    //this.getImageList(data)
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
