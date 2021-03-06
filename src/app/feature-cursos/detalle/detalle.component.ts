import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';
import { Inscripciones } from 'src/app/shared/inscripciones';
import { InscripcionesService } from 'src/app/shared/inscripciones.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleCursoComponent implements OnInit, OnDestroy {


  title = 'Detalle de Curso'
  usuario = localStorage.getItem('usuario');
  curso: Cursos;
  id: number;
  errorMessage = '';
  sub: Subscription;
  inscripciones: Inscripciones[];
  inscripcion: Inscripciones;


  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cursosServicio: CursosService,
    private inscripcionesServicio: InscripcionesService,
    private formBuilder: FormBuilder) { };


  displayedColumns: string[] = ['inscripciones', 'accion'];


  detalleFormGroup: FormGroup = this.formBuilder.group({
    curso: ['', [Validators.required, Validators.maxLength(50)]],
    duracion: ['', [Validators.required, Validators.maxLength(50)]],
    precio: ['', [Validators.required]],

  })

  ngOnInit(): void {

    //Guardo la suscripcion, lleno la variable de cursos y completo el formulario, y lleno la variable de inscripciones, mandando el id del curso.
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.cursosServicio.get(this.id).subscribe({
        next: Cursos => {
          this.curso = Cursos;
          this.detalleFormGroup.patchValue(Cursos);
          this.detalleFormGroup.disable();
          this.inscripciones = this.performFilter(this.id);
        },
        error: err => this.errorMessage = err,
      })
    })

    
  }

  //Desuscribo
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //Filtro las inscripciones a partir del id del curso
  performFilter(IdCurso: number): Inscripciones[] {
    this.inscripcionesServicio.getAll().subscribe({
      next: Inscripciones => {
        this.inscripciones = Inscripciones.filter((inscripcion: Inscripciones) =>
        inscripcion.idCurso == IdCurso);
      },
      error: err => this.errorMessage = err,
    });
    return this.inscripciones
      
  }

  submit() {
    this.router.navigate(["/cursos"]);
  }

  //post para eliminar la inscripcion
  desinscribirAlumno(id:number){
    this.inscripcionesServicio.delete(id).subscribe((resp) => {
      this.inscripcionesServicio.getAll().subscribe((data) => {
        this.inscripciones = data;
      })
    })
    this.router.navigate(["/cursos"])
    
  }


}
