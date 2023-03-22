import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadOnlyComponent } from './componentes/read-only/read-only/read-only.component';
import { EditarComponent } from './componentes/total-editar/editar/editar.component';

const routes: Routes = [
  {path:'', component:ReadOnlyComponent},
  {path:'editar', component:EditarComponent},
  {path:'**', component:ReadOnlyComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
