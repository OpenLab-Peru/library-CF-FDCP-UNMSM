import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class LoginGuard implements CanActivate {

  permiso: any = {};

  constructor(
    private router: Router,
    private service: AdminService,
  ) { }

  canActivate(): boolean {

    if (this.service.loggedIn()) {
      console.log('de login al /home o /documentos o /busqueda');
      this.router.navigate(['/home']);
      //this.router.navigate([this.permiso.urlinit]);
      //Cuando el usuario se logee, segùn el permiso que tenga va a
      //redireccionarse a su página de inicio según su rol
      return false;
    } else {
      console.log('de login al login');
      return true;
    }
  }
}
