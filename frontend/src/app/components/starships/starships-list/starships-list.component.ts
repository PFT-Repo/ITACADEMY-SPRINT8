import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApistarsService } from 'src/app/services/apistars.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {
  inGen = 0
  constructor(private rou: Router,private ser:ApistarsService) { this.ser.getships();}
  
  items: any[] = [] 
 
  ngOnInit(): void { 
    console.log(this.ser.list);
    setTimeout(() => {this.items=this.ser.list}, 20);
  }

  insertInArray(data: any) {

    for (let index = 0; index < data.length; index++) {
      this.items[this.inGen] = data[index];
      this.inGen++;

    }
  }

  openDetails(id: any) {
    console.log(id);

    this.rou.navigate(['/starships', id])
  }
}
