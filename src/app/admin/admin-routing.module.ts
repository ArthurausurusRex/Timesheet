import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home.component';
import { RegisterFormComponent } from './register-form.component';
import { AuthGuard } from '../services/auth-guard-admin.service';
import { ModifyUserComponent } from './modify-user.component'


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
						path: 'add',
						component: RegisterFormComponent,
					},
					{
						path: 'modify/:_id',
						component: ModifyUserComponent,
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