import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarAlumnoComponent implements OnInit, OnDestroy {

  title: string = "Agregar alumno";
  usuario=localStorage.getItem('usuario');
  alumno: Alumnos;
  sub: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) {};
    agregarFormGroup: FormGroup = this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(100)]],
      apellido:['', [Validators.required, Validators.maxLength(100)]],
      mail:['', [Validators.required, Validators.email]],
      edad:['', [Validators.required, Validators.max(99)]],
      fechaNacimiento:['', Validators.required],
      usuario:['', [Validators.required, Validators.maxLength(50)]],
    })

  ngOnInit(): void {
  }

  submit(){
    this.alumno= {
      id: 0,
      nombre: this.agregarFormGroup.controls["nombre"].value,
      apellido: this.agregarFormGroup.controls["apellido"].value,
      mail: this.agregarFormGroup.controls["mail"].value,
      edad: this.agregarFormGroup.controls["edad"].value,
      fechaNacimiento: this.agregarFormGroup.controls["fechaNacimiento"].value,
      usuario: this.agregarFormGroup.controls["usuario"].value,
    };

    this.sub= this.alumnosServicio.add(this.alumno).subscribe((resp)=> {
      this.router.navigate(["/alumnos"])
    })

  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
