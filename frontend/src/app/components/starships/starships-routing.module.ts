import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsFichaComponent } from './starships-ficha/starships-ficha.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
  {path: '', component: StarshipsListComponent,
  children: [
    {path:':id',component:StarshipsFichaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
