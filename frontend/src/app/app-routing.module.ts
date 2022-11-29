import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StarshipsFichaComponent } from './components/starships/starships-ficha/starships-ficha.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path: 'starships', component:StarshipsComponent,canActivate:[AuthGuard], children: [
   // {path:'',redirectTo:'list', pathMatch:'full'},
    {path:'',component:StarshipsListComponent},
    {path:':id',component:StarshipsFichaComponent}
  ]},
 
  {path:'signin',component:SigninComponent}
  ,
  {path:'signup',component:SignupComponent}, 
  { path: '',   redirectTo: '/starships', pathMatch: 'full' },
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
