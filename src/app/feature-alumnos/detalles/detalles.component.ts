import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesAlumnoComponent implements OnInit, OnDestroy {

  title= 'Detalle de Alumno'
  usuario = localStorage.getItem('usuario');
  alumno: Alumnos;
  id: number;
  errorMessage:'';
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) { };

  detalleFormGroup: FormGroup = this.formBuilder.group({  
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    apellido: ['', [Validators.required, Validators.maxLength(100)]],
    mail: ['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required, Validators.max(99)]],
    fechaNacimiento: ['', Validators.required],
    usuario: ['', [Validators.required, Validators.maxLength(50)]],

  })

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.alumnosServicio.get(this.id).subscribe({
        next: Alumnos => {
          this.alumno = Alumnos;
        },
        error: err => this.errorMessage = err,
      })
        this.detalleFormGroup.patchValue(Alumnos);
        this.detalleFormGroup.disable();
      })
  }

  submit(){
    this.router.navigate(["alumnos"]);
  }
 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
