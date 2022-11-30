import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships-ficha',
  templateUrl: './starships-ficha.component.html',
  styleUrls: ['./starships-ficha.component.scss']
})
export class StarshipsFichaComponent implements OnInit {
  item=[]
  itemsi=[]
  queriesGot:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  firstLoad() {
    this.route.queryParamMap.subscribe((params) => {
      this.queriesGot = {...params};
    console.log(this.queriesGot);
    });
  }

}
