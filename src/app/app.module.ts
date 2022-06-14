import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeatureAlumnosModule } from './feature-alumnos/feature-alumnos.module';
import { FeatureCursosModule } from './feature-cursos/feature-cursos.module';
import { FeatureInscripcionesModule } from './feature-inscripciones/feature-inscripciones.module';
import { MaterialModule } from './modules/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PruebaComponent } from './prueba/prueba.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';


registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureAlumnosModule,
    FeatureCursosModule,
    FeatureInscripcionesModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [ {
    provide: LOCALE_ID,
    useValue: 'es-Ar' 

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


