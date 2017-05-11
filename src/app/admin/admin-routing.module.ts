import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home.component';
import { RegisterFormComponent } from './register-form.component';
import { AuthGuard } from '../services/auth-guard-admin.service';
import { ModifierUtilisateurComponent } from './modifier-utilisateur.component'


const adminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path:'',
				canActivateChild: [AuthGuard],
				children: [
					{
						path: 'ajout',
						component: RegisterFormComponent,
					},
					{
						path: 'modifier/:_id',
						component: ModifierUtilisateurComponent,
					}
				]
			}
		]

	}
];


@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})

export class AdminRoutingModule{}