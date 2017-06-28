import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { ManagerHomeComponent } from './manager-home.component';
import { AuthGuard } from '../services/auth-guard-manager.service';



const managerRoutes: Routes = [
	{
		path: 'manager',
		component: ManagerComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path:'',
				canActivateChild: [AuthGuard],
				children: [
				]
			}
		]

	}
];


@NgModule({
	imports: [RouterModule.forChild(managerRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})

export class ManagerRoutingModule{}