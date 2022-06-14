import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatureAlumnosModule } from '../feature-alumnos/feature-alumnos.module';

import { MaterialModule } from '../modules/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { CoreRoutingModule } from './core.routing.module';


@NgModule({
  declarations: [
    ToolbarComponent,
    LoginComponent,
    SidebarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FeatureAlumnosModule,
    MaterialModule,
    CoreRoutingModule
  ],
  exports: [ToolbarComponent, SidebarComponent]
})
export class CoreModule { }
