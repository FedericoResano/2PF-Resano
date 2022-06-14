import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar/agregar.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { DetalleCursoComponent } from './detalle/detalle.component';
import { EliminarCursoComponent } from './eliminar/eliminar.component';
import { ModificarCursoComponent } from './modificar/modificar.component';



const routes: Routes =[
  {
    path: '',
    component: CursosListComponent
  },
  {
      path:'agregar',
      component: AgregarCursoComponent
  },
  {
      path:'editar/:id',
      component: ModificarCursoComponent
  },
  {
      path:'eliminar/:id',
      component: EliminarCursoComponent
  },
  {
    path:'detalle/:id',
    component: DetalleCursoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CursosRoutingModule { }