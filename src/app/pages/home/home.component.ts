import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../theme/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public, private
  private nombre: any; // Declarar tipo de Dato por buenas prácticas
  // Tipos de datos: string, int, float, number, boolean, etc
  // any (Tipo de dato dinámico) hace que la variable sea lo que quieran :v
  fecha: Date;
  gatito: boolean;
  arreglo: any;
  url = 'https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-848x477x80xX.jpg';

  constructor(private _swapiService: SwapiService) {

    this.nombre = 'Edwin ;)';
    this.arreglo = [
      {
        nombre: 'edwin',
        apellido: 'deza',
        edad: 23
      },
      {
        nombre: 'leo',
        apellido: 'ramirez',
        edad: 22
      }
    ];
    this.gatito = false;
    this.fecha = new Date();
  }
  ngOnInit() { // Por buenas prácticas
    // Let define una variable que cambia su valor.
    let variablex: string = 'lalala';

    // const define una variable y esta no cambia su valor
    const variabley: string = 'lololo';

    this._swapiService.getLuke('1')
      .subscribe(resultado => {
        console.log('luke: ', resultado);
      });
  }
  miClick() {
    this.gatito = !this.gatito;
  }

}
