import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BajasComponent } from './bajas/bajas.component';
import { InscripcionesListComponent } from './inscripciones-list/inscripciones-list.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';




const routes: Routes =[
  {
    path: '',
    component: InscripcionesListComponent
  },
  {
      path:'alta',
      component: InscripcionesComponent
  },
  {
      path:'baja/:id',
      component: BajasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InscripcionesRoutingModule { }