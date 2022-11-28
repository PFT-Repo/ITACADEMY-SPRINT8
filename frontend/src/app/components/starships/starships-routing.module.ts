import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsFichaComponent } from './starships-ficha/starships-ficha.component';
import { StarshipsComponent } from './starships.component';

const routes: Routes = [
  {path: 'starships', component:StarshipsComponent,
  children: [
    {path:':id',component:StarshipsFichaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
