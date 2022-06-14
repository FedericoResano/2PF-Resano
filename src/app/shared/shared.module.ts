import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombrePipe } from './nombre.pipe';
import { FechaPipe } from './fecha.pipe';




@NgModule({
  declarations: [
    NombrePipe,
    FechaPipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [ NombrePipe, FechaPipe ]
})
export class SharedModule { }
