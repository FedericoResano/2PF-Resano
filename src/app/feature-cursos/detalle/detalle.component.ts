import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleCursoComponent implements OnInit, OnDestroy {


  title= 'Detalle de Curso'
  usuario = localStorage.getItem('usuario');
  curso: Cursos;
  id: number;
  errorMessage='';
  sub:Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cursosServicio: CursosService,
    private formBuilder: FormBuilder) { };

  detalleFormGroup: FormGroup = this.formBuilder.group({  
    curso:['', [Validators.required, Validators.maxLength(50)]],
    duracion:['', [Validators.required, Validators.maxLength(50)]],
    precio:['', [Validators.required]],

  })

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.cursosServicio.get(this.id).subscribe({
        next: Cursos => {
          this.curso = Cursos;
          this.detalleFormGroup.patchValue(Cursos);
        this.detalleFormGroup.disable();
        },
        error: err => this.errorMessage = err,
      })
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  submit(){
    this.router.navigate(["cursos"]);
  }
 


}
