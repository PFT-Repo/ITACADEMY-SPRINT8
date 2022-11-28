import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigningComponent } from './components/signing/signing.component';
import { SignoutComponent } from './components/signout/signout.component';
import { PilotosFichaComponent } from './components/pilotos-ficha/pilotos-ficha.component';
import { PelisFichaComponent } from './components/pelis-ficha/pelis-ficha.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsFichaComponent } from './components/starships/starships-ficha/starships-ficha.component';
import { ApistarsService } from './services/apistars.service';

@NgModule({
  declarations: [
    AppComponent,
    SigningComponent,
    SignoutComponent,
    StarshipsComponent,
    StarshipsListComponent,
    StarshipsFichaComponent,
    PilotosFichaComponent,
    PelisFichaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    StarshipsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApistarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
