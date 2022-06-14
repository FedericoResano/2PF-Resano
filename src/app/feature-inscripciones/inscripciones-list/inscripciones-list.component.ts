import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/shared/inscripciones';
import { InscripcionesService } from 'src/app/shared/inscripciones.service';

@Component({
  selector: 'app-inscripciones-list',
  templateUrl: './inscripciones-list.component.html',
  styleUrls: ['./inscripciones-list.component.scss']
})
export class InscripcionesListComponent implements OnInit, OnDestroy {
  usuario = localStorage.getItem('usuario');
  inscripciones: Inscripciones[];
  pageTitle: string = "Listado de Inscripciones";
  errorMessage = '';
  sub: Subscription

  displayedColumns: string[] = ['alumno', 'curso', 'fechaInicio', 'accion'];
  constructor(private serviceCursos: InscripcionesService) {

  }

  ngOnInit(): void {
    this.sub = this.serviceCursos.getAll().subscribe({
      next: Inscripciones => {
        this.inscripciones = Inscripciones;
      },
        
      error: err => this.errorMessage = err,
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
