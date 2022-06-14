import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';
import { Inscripciones } from 'src/app/shared/inscripciones';
import { InscripcionesService } from 'src/app/shared/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit, OnDestroy {
  title: string = "Inscripción de alumno";
  usuario=localStorage.getItem('usuario');
  inscripciones: Inscripciones[];
  inscripcion: Inscripciones;
  alumnos: Alumnos[];
  cursos: Cursos[];
  sub: Subscription
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private inscripcionesServicio: InscripcionesService,
    private alumnosServicio: AlumnosService,
    private cursosServicio: CursosService,
    private formBuilder: FormBuilder) {};
    altaFormGroup: FormGroup = this.formBuilder.group({
      alumno:['', Validators.required],
      curso:['', Validators.required],
      fechaInicio:['', Validators.required],
      idAlumno:[''],
      idCurso:[''],
    })

  ngOnInit(): void {
    this.alumnosServicio.getAll().subscribe(data => {
      this.alumnos = data;
    })
    this.cursosServicio.getAll().subscribe(data => {
      this.cursos = data;
    })
  }

  submit(){
    this.inscripcion= {
      id: 0,
      idAlumno: this.altaFormGroup.controls["alumno"].value,
      curso: this.altaFormGroup.controls["curso"].value,
      fechaInicio: this.altaFormGroup.controls["fechaInicio"].value,
      idCurso: this.altaFormGroup.controls["curso"].value,
      alumno: this.altaFormGroup.controls["alumno"].value
      
    };

    this.sub = this.inscripcionesServicio.add(this.inscripcion).subscribe((resp)=> {
      this.router.navigate(["/inscripciones"])
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
