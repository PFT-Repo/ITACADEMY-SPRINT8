import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistarsService } from 'src/app/services/apistars.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-starships-ficha',
  templateUrl: './starships-ficha.component.html',
  styleUrls: ['./starships-ficha.component.scss']
})
export class StarshipsFichaComponent implements OnInit {
  item:any=[]
  itemsi:any=[]
  queriesGot:any;
  constructor(private route:ActivatedRoute,private ser:ApistarsService) {
    this.ser.getImageships()
    }

  ngOnInit(): void {
    
    setTimeout(()=>{this.itemsi = this.ser.imgList;this.firstLoad()},20);
    ;
  }

  firstLoad() {
   // setTimeout(()=>{this.itemsi = this.ser.imgList},2)
    console.log(this.itemsi);
    
    this.queriesGot=this.route.snapshot.paramMap.get('id');
    
    setTimeout(()=>{this.getShip()},2);
 }

 getShip(){

console.log(this.itemsi);
    const result =this.getMoviesFromDirector(this.itemsi);
    this.item = result[0];
    let y = <HTMLImageElement> document.getElementById('im');
    y.src = this.item.img;
    console.log(this.item);
    
 }

 getMoviesFromDirector(array:[]) {
  const values = Object.values(array);
let v:any[] = values[0]
const result = v?.filter((num:{name: string}) => num.name == this.queriesGot);
//  if (array!= null){return array.filter((array:{name:string}) => array.name == this.queriesGot);
//}
return result;
}

}
