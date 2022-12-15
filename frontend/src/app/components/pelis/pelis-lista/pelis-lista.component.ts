import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApistarsService } from 'src/app/services/apistars.service';

@Component({
  selector: 'app-pelis-lista',
  templateUrl: './pelis-lista.component.html',
  styleUrls: ['./pelis-lista.component.scss']
})
export class PelisListaComponent implements OnInit {
  
  constructor(private rou: Router,private ser:ApistarsService) { 
  this.ser.getFilms();setTimeout(()=>{this.updateList()},100);}
  items: any[] = [] 
 
  ngOnInit(): void { 
    this.ser.filmList=[]
  }
updateList(){ 
  this.items=this.ser.filmList;
  console.log(this.items);
}
  insertInArray(data: any) {
    this.items = data;
    /*for (let index = 0; index < data.length; index++) {
      this.items[this.inGen] = data[index];
      this.inGen++;
    }*/
    console.log('after insert ' +this.items);
    
  }
 

  openDetails(id: any) {
    console.log(id);

    this.rou.navigate(['/films', id])
  }
}
