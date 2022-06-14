import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { ModificarCursoComponent } from './modificar/modificar.component';
import { AgregarCursoComponent } from './agregar/agregar.component';
import { EliminarCursoComponent } from './eliminar/eliminar.component';
import { DetalleCursoComponent } from './detalle/detalle.component';
import { MaterialModule } from '../modules/material.module';
import { CursosRoutingModule } from './cursos.routing.module';



@NgModule({
  declarations: [
    CursosListComponent,
    ModificarCursoComponent,
    AgregarCursoComponent,
    EliminarCursoComponent,
    DetalleCursoComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule
  ],
  exports: [CursosListComponent, ModificarCursoComponent, AgregarCursoComponent, EliminarCursoComponent, DetalleCursoComponent]
})
export class FeatureCursosModule { }
