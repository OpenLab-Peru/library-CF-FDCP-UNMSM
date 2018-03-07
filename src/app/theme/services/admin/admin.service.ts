import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientService } from "../api/http-client.service";
import { environment } from "../../../../environments/environment";


@Injectable()
export class AdminService {

  private url = environment.apiserver2;
  token:string;

  constructor(private http:HttpClientService) { }

  getToken(): string {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = this.getToken();
  }
  removeToken() {
    localStorage.removeItem('token');
    this.token = this.getToken();
  }
  login(obj: any): Observable<any> {
    let ruta: string = `${this.url}/usuario/login`;
    // console.log('ruta: ', ruta);
    let data = JSON.stringify({
      username: obj.email,
      password: obj.password
    });
    return this.http.post(ruta, data);
  }

  loggedIn(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
