import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Librería de router - Angular

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  miproducto: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.miproducto = '';
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(parametros => {
        console.log(parametros.codigo);
        this.miproducto = parametros.codigo;
      });
  }

}
