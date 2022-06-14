import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit, OnDestroy {
  usuario = localStorage.getItem('usuario');
  cursos: Cursos[];
  pageTitle: string = "Listado de Cursos";
  errorMessage = '';
  sub: Subscription

  displayedColumns: string[] = ['curso', 'duracion', 'precio', 'accion'];
  constructor(private serviceCursos: CursosService) {

  }

  ngOnInit(): void {
    this.sub = this.serviceCursos.getAll().subscribe({
      next: Cursos => {
        this.cursos = Cursos;
      },
      error: err => this.errorMessage = err,
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
