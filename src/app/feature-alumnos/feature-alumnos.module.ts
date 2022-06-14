import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../modules/material.module';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { GrillaAlumnosComponent } from './grilla-alumnos/grilla-alumnos.component';
import { ModificarAlumnoComponent } from './modificar/modificar.component';
import { EliminarAlumnoComponent } from './eliminar/eliminar.component';
import { AgregarAlumnoComponent } from './agregar/agregar.component';
import { DetallesAlumnoComponent } from './detalles/detalles.component';
import { AlumnosRoutingModule } from './alumnos.routing.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    GrillaAlumnosComponent,
    ModificarAlumnoComponent, 
    EliminarAlumnoComponent,
    AgregarAlumnoComponent,
    DetallesAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    AlumnosRoutingModule,
 
  ],
  exports: [GrillaAlumnosComponent, ModificarAlumnoComponent, EliminarAlumnoComponent, AgregarAlumnoComponent, DetallesAlumnoComponent, AlumnosRoutingModule]
})
export class FeatureAlumnosModule { }
