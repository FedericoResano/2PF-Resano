import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombrePipe } from './nombre.pipe';
import { FechaPipe } from './fecha.pipe';
import { FechaInscripcionesPipe } from './fecha-inscripciones.pipe';




@NgModule({
  declarations: [
    NombrePipe,
    FechaPipe,
    FechaInscripcionesPipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [ NombrePipe, FechaPipe, FechaInscripcionesPipe ]
})
export class SharedModule { }
