import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/editar/navbar/navbar.component';
import { BannerComponent } from './componentes/editar/banner/banner.component';

import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './componentes/editar/acerca-de/acerca-de.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
