import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipsFichaComponent } from './starships-ficha/starships-ficha.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  inGen=0
  constructor(private rou:Router) { }
  items: any[] = []
  ngOnInit(): void {
    this.getships();
  }

  getships(){
    fetch('https://swapi.py4e.com/api/starships/').then(response=> response.json()).then(data => this.insertInArray(data.results)
    );
  }


insertInArray(data:any){
   
for (let index = 0; index < data.length; index++) {
  this.items[this.inGen]= data[index];
  this.inGen++;

}
}

openDetails(id:any){
  console.log(id);
  
this.rou.navigate(['/starships',id])
}

}