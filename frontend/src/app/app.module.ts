import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { PilotosFichaComponent } from './components/pilotos-ficha/pilotos-ficha.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsFichaComponent } from './components/starships/starships-ficha/starships-ficha.component';
import { ApistarsService } from './services/apistars.service';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PelisComponent } from './components/pelis/pelis.component';
import { PelisListaComponent } from './components/pelis/pelis-lista/pelis-lista.component';
import { PelisFichaComponent } from './components/pelis/pelis-ficha/pelis-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipsListComponent,
    StarshipsFichaComponent,
    PilotosFichaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    StarshipsListComponent,
    SignupComponent,
    SigninComponent,
    PelisComponent,
    PelisListaComponent,
    PelisFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,InfiniteScrollModule
  ],
  providers: [ApistarsService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
