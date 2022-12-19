import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistarsService } from 'src/app/services/apistars.service';

@Component({
  selector: 'app-pelis-ficha',
  templateUrl: './pelis-ficha.component.html',
  styleUrls: ['./pelis-ficha.component.scss']
})
export class PelisFichaComponent implements OnInit {

  item:any=[]
  itemsi:any=[]
  queriesGot:any;
  constructor(private route:ActivatedRoute,private ser:ApistarsService) {
    this.ser.getFilms();
    if(this.ser.filmList[0] == null){
      this.ser.getFilms();
    }
    else{
      this.ngOnInit();
    }
    }

  ngOnInit(): void {
    
    setTimeout(()=>{this.itemsi = this.ser.filmList;this.firstLoad()},20);
    ;
  }

  firstLoad() {
   // setTimeout(()=>{this.itemsi = this.ser.filmList},2)
   this.itemsi = this.ser.filmList;
    console.log(this.itemsi);
    
    this.queriesGot=this.route.snapshot.paramMap.get('id');
    
    setTimeout(()=>{this.getShip()},2);
 }

 getShip(){

console.log('itemsi será igual al array de pelis: '+ this.itemsi);
    const result =this.getMoviesFromDirector(this.itemsi);
    if(result)
    this.item = result[0];
    let y = <HTMLImageElement> document.getElementById('im');
    y.src = "../../../../assets/img/"+this.item.title+".jpg";
    console.log(this.item);
    
 }

 getMoviesFromDirector(array:[]) {
  const values = Object.values(array);
  console.log("esto es values: "+values[1]);
  
//let v:typeof array[] = values[0]
//const result = v?.filter((num)=> num == this.queriesGot);
 if (array!= null){return array.filter((array:{title:string}) => array.title == this.queriesGot);
}
return;
}

}
