import { Injectable } from '@angular/core';
import { HttpClientService } from './api/http-client.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';


@Injectable()
export class SwapiService {

  private url = environment.apiserver;

  constructor(private http: HttpClientService) { }

  getLuke(id: string) {
    let ruta: string = `${this.url}/api/people/${id}`;
    return this.http.get(ruta);
  }

}
