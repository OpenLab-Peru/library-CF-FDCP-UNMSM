import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../theme/services/admin/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { Observable, } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginform: FormGroup;

  constructor(
    private _adminService:AdminService,    
    private router: Router, 
    public formB: FormBuilder) { }

  ngOnInit() {
    this.loginform = this.formB.group({
      emailForm: new FormControl('', [
        Validators.required
        // ,
        // Validators.pattern(EMAIL_REGEX)
      ]),
      passForm: new FormControl('', Validators.required)
    });
  }
  onSubmitLogin(loginform: FormGroup): void {
    console.log("Llega :",loginform);
    if (!loginform.valid){
      console.log('El correo/contraseña es incorrecto', 'error',)
    } else {
      if (loginform.value) {
        // console.log('you submitted value: ', loginform.value);
        let formvalue = loginform.value;
        this._adminService.setToken('mitoken');
        this.router.navigate(['/home']);
        // let subForm: Subscription = this._adminService.login({
        //   email: formvalue.emailForm,
        //   password: formvalue.passForm
        // }).subscribe(
        //   (res: any) => {
        //     if (res.usuario.token) {
        //       this._adminService.setToken(res.usuario.token);
        //       // this._adminService.setUser(res.usuario);
        //       // this._adminService.setUserPermiso();
        //     }
        //     console.log('res.usuario: ', res.usuario);
        //     this.router.navigate(['/home']);

        //   }, (err: HttpErrorResponse) => {
        //     if (err.error instanceof Error) {
        //       console.log('Client-side error occured: ', err);
        //     } else {
        //       console.log('Server-side error occured: ', err);
        //     }
        //   });
      }
    }
  }

}




