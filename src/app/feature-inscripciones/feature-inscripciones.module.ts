import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesListComponent } from './inscripciones-list/inscripciones-list.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { BajasComponent } from './bajas/bajas.component';
import { MaterialModule } from '../modules/material.module';
import { InscripcionesRoutingModule } from './inscripciones.routing.module';
import { FechaPipe } from '../shared/fecha.pipe';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InscripcionesListComponent,
    InscripcionesComponent,
    BajasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    InscripcionesRoutingModule,
    SharedModule
  ],
  exports: [
    InscripcionesListComponent, InscripcionesComponent, BajasComponent
  ]
})
export class FeatureInscripcionesModule { }
