import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { NosotrosComponent } from './nosotros.component';

const routes: Routes = [
    // { path: 'maquinarias', redirectTo: 'maquinarias/maquinarias-categoria-eq'},
    // { path: 'maquinaria/:idmaquina', component:  DetmaquinariaComponent},
    { path: '', component: NosotrosComponent},
    { path: 'equipo', component: EquipoComponent},
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VariosRoutingModule { }

