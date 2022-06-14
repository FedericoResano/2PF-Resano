import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar/agregar.component';
import { DetallesAlumnoComponent } from './detalles/detalles.component';
import { EliminarAlumnoComponent } from './eliminar/eliminar.component';
import { ModificarAlumnoComponent } from './modificar/modificar.component';



const routes: Routes = [

    {
        path: 'agregar',
        component: AgregarAlumnoComponent
    },
    {
        path: 'editar/:id',
        component: ModificarAlumnoComponent
    },
    {
        path: 'eliminar/:id',
        component: EliminarAlumnoComponent
    },
    {
        path: 'detalle/:id',
        component: DetallesAlumnoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlumnosRoutingModule { }