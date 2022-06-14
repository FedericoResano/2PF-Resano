import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarCursoComponent implements OnInit, OnDestroy {


  //Me traigo la info del usuario y genero la propiedad de alumno.
  usuario = localStorage.getItem('usuario');
  title: string = "Editar curso";
  curso: Cursos;
  sub:Subscription;
  errorMessage='';

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cursosServicio: CursosService,
    private formBuilder: FormBuilder) { };

  //Armo las propiedades del formulario.
  modificarFormGroup: FormGroup = this.formBuilder.group({
    curso: ['', [Validators.required, Validators.maxLength(50)]],
    duracion: ['', [Validators.required, Validators.maxLength(50)]],
    precio: ['', [Validators.required]],
  })

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe((params) => {
      var id = params["id"];
      this.cursosServicio.get(id).subscribe({
        next: Cursos => {
          this.curso = Cursos;
        },
        error: err => this.errorMessage = err,
      })
        this.modificarFormGroup.patchValue(Cursos);
      })
  }
  //Cargo los datos que tengo en el formulario en la propiedad de alumno y se la paso en un update al servicio. Redirijo a la pagina del listado
  submit() {
    this.curso.curso = this.modificarFormGroup.get("curso")?.value;
    this.curso.duracion = this.modificarFormGroup.get("duracion")?.value;
    this.curso.precio = this.modificarFormGroup.get("precio")?.value;

    this.cursosServicio.update(this.curso).subscribe((resp) => {
      this.router.navigate(["cursos"]);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
