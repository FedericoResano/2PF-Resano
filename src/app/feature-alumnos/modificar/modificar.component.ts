import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumnos } from 'src/app/shared/alumnos';
import { AlumnosService } from 'src/app/shared/alumnos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarAlumnoComponent implements OnInit {

  //Me traigo la info del usuario y genero la propiedad de alumno.
  usuario=localStorage.getItem('usuario');
  title: string = "Editar alumno";
  alumno: Alumnos;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private alumnosServicio: AlumnosService,
    private formBuilder: FormBuilder) {};

    //Armo las propiedades del formulario.
    modificarFormGroup: FormGroup = this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(100)]],
      apellido:['', [Validators.required, Validators.maxLength(100)]],
      mail:['', [Validators.required, Validators.email]],
      edad:['', [Validators.required, Validators.max(99)]],
      fechaNacimiento:['', Validators.required],
      usuario:['', [Validators.required, Validators.maxLength(50)]],
    })

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      var id = params["id"];
      this.alumnosServicio.get(id).subscribe((data) => {
        this.alumno = data;
        this.modificarFormGroup.patchValue(data);
      })
    })
  }
  //Cargo los datos que tengo en el formulario en la propiedad de alumno y se la paso en un update al servicio. Redirijo a la pagina del listado
  submit(){
    this.alumno.apellido=this.modificarFormGroup.get("apellido")?.value;
    this.alumno.nombre=this.modificarFormGroup.get("nombre")?.value;
    this.alumno.mail=this.modificarFormGroup.get("mail")?.value;
    this.alumno.edad=this.modificarFormGroup.get("edad")?.value;

    this.alumnosServicio.update(this.alumno).subscribe((resp)=> {
      this.router.navigate(["alumnos"]);
    })
   }

}
