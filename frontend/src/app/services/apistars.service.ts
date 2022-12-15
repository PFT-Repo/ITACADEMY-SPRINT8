import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApistarsService {
  list: any[]=[];
  realList:any[]=[]
  filmList:any[]=[]
  imgList: any[]=[];
  place = 0;
  constructor() { 
   //this.getships(1);
    this.getImageships()
  }
  
  getships(n:number) {
    console.log(n);
    this.place=n;
    let url = new URL('http://localhost:3000/starpi/starships/'+n);
    this.list = [];
    fetch(url).then(response => response.json()).then(data => this.getList(data.results)
    );
 
  }
  getFilms() {
    let url = new URL('http://localhost:3000/starpi/films');
    fetch(url).then(response => response.json()).then(data => this.getFilmList(data.results)
    );
  }
  getFilmList(any:any){
    console.log(any);
   this.list = any;
   for (let index = 0; index < any.length; index++) {
     this.filmList.push(any[index]);
    
   }
   //this.filmList.push( any);
   console.log(this.filmList);
   
    return this.filmList.sort((a,b)=> a.episode_id - b.episode_id );
  } 
  getList(any:any){
    console.log(any);
   this.list = any;
   for (let index = 0; index < any.length; index++) {
     this.realList.push(any[index]);
    
   }
   //this.realList.push( any);
   console.log(this.realList);
   
    return this.realList;
  } 

  getImageships() {
    fetch('http://localhost:3000/starpi').then(response => response.json()).then(data => this.getImageList(data.naves)
    );
 
  }
  getImageList(any:any){
    this.imgList = any;
     console.log(this.imgList);
    return this.imgList;
  }
}
