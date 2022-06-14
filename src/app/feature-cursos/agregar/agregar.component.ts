import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/shared/cursos';
import { CursosService } from 'src/app/shared/cursos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarCursoComponent implements OnInit, OnDestroy {

  title: string = "Agregar alumno";
  usuario=localStorage.getItem('usuario');
  curso: Cursos;
  sub: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cursosServicio: CursosService,
    private formBuilder: FormBuilder) {};
    agregarFormGroup: FormGroup = this.formBuilder.group({
      curso:['', [Validators.required, Validators.maxLength(50)]],
      duracion:['', [Validators.required, Validators.maxLength(50)]],
      precio:['', [Validators.required]],
    })

  ngOnInit(): void {
  }

  submit(){
    this.curso= {
      id: 0,
      curso: this.agregarFormGroup.controls["curso"].value,
      duracion: this.agregarFormGroup.controls["duracion"].value,
      precio: this.agregarFormGroup.controls["precio"].value
    };

    this.sub = this.cursosServicio.add(this.curso).subscribe((resp)=> {
      this.router.navigate(["/cursos"])
    })

  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
