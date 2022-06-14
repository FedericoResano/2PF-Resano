import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { GrillaAlumnosComponent } from './feature-alumnos/grilla-alumnos/grilla-alumnos.component';
import { CursosListComponent } from './feature-cursos/cursos-list/cursos-list.component';
import { InscripcionesListComponent } from './feature-inscripciones/inscripciones-list/inscripciones-list.component';

const routes: Routes = [
  
  {
    path:'',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path:'alumnos',
    loadChildren: () => import('./feature-alumnos/feature-alumnos.module').then(m => m.FeatureAlumnosModule)
  },
  {
    path:'cursos',
    loadChildren: () => import('./feature-cursos/feature-cursos.module').then(m => m.FeatureCursosModule)
  },
  {
    path:'inscripciones',
    loadChildren: () => import('./feature-inscripciones/feature-inscripciones.module').then(m => m.FeatureInscripcionesModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
