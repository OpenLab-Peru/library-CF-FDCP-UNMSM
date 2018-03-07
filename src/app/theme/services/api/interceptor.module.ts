import { Injectable, Inject, Injector, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminService } from '../admin/admin.service';
import 'rxjs/add/operator/do';

// tslint:disable-next-line:max-line-length
// https://stackoverflow.com/questions/47417899/angular-4-and-oauth-intercept-401-responses-refresh-the-access-token-and-retr/47420967#47420967


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private inj: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if the request has "Authorization" we return the request
        if (req.headers.has('Authorization')) {
            console.log('Ya tiene header.', req.headers.has('Authorization'));
            return next.handle(req);
        }

        // I get here the AuthService
        const tok = this.inj.get(AdminService);
        const authHeader = tok.getToken();

        if (authHeader) {
            const dupReq = req.clone({
                headers: req.headers
                    .set('Content-Type', 'application/json; charset=utf-8')
                    // .set('Access-Control-Allow-Origin', 'http://apiweblibrary.fceaunas.edu.pe')
                    // .set('Authorization', `bearer ${localStorage.getItem('token')}`)
                    .set('Authorization', `Bearer ${authHeader}`)
            });
            return next.handle(dupReq);
        } else {
            const dupReq = req.clone({
                headers: req.headers
                    .set('Content-Type', 'application/json; charset=utf-8')
                // .set('Access-Control-Allow-Origin', 'http://apiweblibrary.fceaunas.edu.pe')
            });
            return next.handle(dupReq);
        }
    }
}

@NgModule({
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpsRequestInterceptor,
        multi: true
    }]
})
export class InterceptorModule { }
