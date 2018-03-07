import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
	{
		path: 'biblioteca', component: BibliotecaComponent
	},
	{
		path: 'informacion', component: InformacionComponent
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'informacion'}
];


@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule {}