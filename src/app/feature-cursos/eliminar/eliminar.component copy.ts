import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';
import { FechaPipe } from 'src/app/shared/fecha.pipe';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarAlumnoComponent implements OnInit, OnDestroy {

  title: string = "Eliminar alumno";

  //Recupero la info del usuario
  usuario = localStorage.getItem('usuario');

  //Genero la propiedad alumno para el get y alumnos para volver a cargar la lista
  alumno: Alumnos
  alumnos: Alumnos[];
  id: number;
  pipeFecha: FechaPipe = new FechaPipe();
  errorMessage = '';
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) { };
  eliminarFormGroup: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    apellido: ['', [Validators.required, Validators.maxLength(100)]],
    mail: ['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required, Validators.max(99)]],
    fechaNacimiento: ['', Validators.required],
    usuario: ['', [Validators.required, Validators.maxLength(50)]],
  })

  ngOnInit(): void {
    //Llamo al get del servicio para que me cargue los datos en el formulario y aca cargo el id en una variable para luego pasarla en le post.
    this.sub= this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.alumnosServicio.get(this.id).pipe(map((x: Alumnos) => {
        x.fechaNacimiento = this.pipeFecha.transform(x.fechaNacimiento);
        return x;
      })).subscribe({
        next: Alumnos => {
          this.alumno = Alumnos;
          this.eliminarFormGroup.patchValue(Alumnos);
          this.eliminarFormGroup.disable();
        },
        error: err => this.errorMessage = err,
      })
    })
  }
  //Envio la el id del alumno a eliminar y regenero la propiedad alumnos[] para tenerla actuaizada. Redirijo a la lista de alumnos
  submit() {
    this.alumnosServicio.delete(this.id).subscribe((resp) => {
      this.alumnosServicio.getAll().subscribe({
        next: Alumnos => {
          this.alumnos = Alumnos;
        },
        error: err => this.errorMessage = err,
      })
  
    this.router.navigate(["/alumnos"])
  })
};

ngOnDestroy(): void{
  this.sub.unsubscribe();
}
}
