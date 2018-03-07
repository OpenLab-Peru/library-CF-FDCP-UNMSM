import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './theme/services/guard/login.guard.service';
import { ComponentGuard } from './theme/services/guard/component.guard.service';


const routes: Routes = [
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
	{ path: 'home', component: HomeComponent, canActivate:[ComponentGuard] },
	{ path: 'contacto', component: ContactoComponent, canActivate:[ComponentGuard] },
	{ path: 'productos', component: ProductosComponent },
	{ path: 'productos/:codigo', component: DetalleComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
