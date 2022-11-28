import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { StarshipsFichaComponent } from './components/starships/starships-ficha/starships-ficha.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path: 'starships', component:StarshipsComponent, children: [
   // {path:'',redirectTo:'list', pathMatch:'full'},
    {path:'',component:StarshipsListComponent},
    {path:':id',component:StarshipsFichaComponent}
  ]},
  { path: '',   redirectTo: '/starships', pathMatch: 'full' },
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
