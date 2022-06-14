import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';

@Component({
  selector: 'app-grilla-alumnos',
  templateUrl: './grilla-alumnos.component.html',
  styleUrls: ['./grilla-alumnos.component.scss']
})
export class GrillaAlumnosComponent implements OnInit,  OnDestroy {
  usuario = localStorage.getItem('usuario');
  alumnos: Alumnos[];
  pageTitle: string = "Listado de Alumnos";
  errorMessage = '';
  sub: Subscription;

  displayedColumns: string[] = ['alumnoNombre', 'alumnoCurso', 'alumnoMail', 'accion'];
  constructor(private serviceAlumnos: AlumnosService) {

  }

  ngOnInit(): void {
    this.sub = this.serviceAlumnos.getAll().subscribe({
      next: Alumnos => {
        this.alumnos = Alumnos;
      },
      error: err => this.errorMessage = err,
    })
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
