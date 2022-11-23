import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigningComponent } from './components/signing/signing.component';
import { SignoutComponent } from './components/signout/signout.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipsFichaComponent } from './components/starships-ficha/starships-ficha.component';
import { PilotosFichaComponent } from './components/pilotos-ficha/pilotos-ficha.component';
import { PelisFichaComponent } from './components/pelis-ficha/pelis-ficha.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigningComponent,
    SignoutComponent,
    StarshipsComponent,
    StarshipsFichaComponent,
    PilotosFichaComponent,
    PelisFichaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
