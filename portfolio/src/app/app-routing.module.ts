import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login/login.component';
import { ReadOnlyComponent } from './componentes/read-only/read-only/read-only.component';
import { EditarComponent } from './componentes/total-editar/editar/editar.component';
import {sesionAuth} from './seguridad/sesion.guard'

const routes: Routes = [
  {path:'', component:ReadOnlyComponent},
  {path:'editar', component:EditarComponent, canActivate:[sesionAuth]},
  {path:'login', component:LoginComponent},
  {path:'**', component:ReadOnlyComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
