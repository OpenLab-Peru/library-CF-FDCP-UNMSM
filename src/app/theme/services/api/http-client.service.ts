import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
  // Update generico
  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }
  // Update para un item :v
  patch(url: string, data: any): Observable<any> {
    return this.http.patch(url, data);
  }


}
