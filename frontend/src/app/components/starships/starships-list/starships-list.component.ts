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
  private actualPage = 1;
  private lastPage = 4;
  constructor(private rou: Router,private ser:ApistarsService) { 
  this.ser.getships(this.actualPage);setTimeout(()=>{this.updateList()},100);}
  items: any[] = [] 
 
  ngOnInit(): void { 
    this.ser.realList=[]
  }
updateList(){ 
  this.items=this.ser.realList;
  console.log(this.items);
}
  insertInArray(data: any) {

    for (let index = 0; index < data.length; index++) {
      this.items[this.inGen] = data[index];
      this.inGen++;
    }
    console.log('after insert ' +this.items);
    
  }
  onScroll(){
    let y = document.getElementById("loader");
    y?.classList.add("show");
    if(this.actualPage<=this.lastPage){ 
      console.log('Scrolled');
      if(this.actualPage == 1){
        this.actualPage=2;
      }
      this.ser.getships(this.actualPage);
      this.actualPage++;
      setTimeout(()=>{this.updateList();
      y?.classList.remove("show");},4000);

    }
    else{
      console.log('Scroll finalizado');
      y?.classList.remove("show");
    }
  }

scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  openDetails(id: any) {
    console.log(id);

    this.rou.navigate(['/starships', id])
  }
}
