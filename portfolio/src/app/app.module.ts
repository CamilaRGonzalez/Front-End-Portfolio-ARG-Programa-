import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/editar/navbar/navbar.component';
import { BannerComponent } from './componentes/editar/banner/banner.component';

import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './componentes/editar/acerca-de/acerca-de.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/editar/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/editar/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/editar/proyectos/proyectos.component';
import { EditarComponent } from './componentes/total-editar/editar/editar.component';
import { ReadOnlyComponent } from './componentes/read-only/read-only/read-only.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EditarComponent,
    ReadOnlyComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
