import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NosotrosComponent, EquipoComponent]
})
export class NosotrosModule { }
