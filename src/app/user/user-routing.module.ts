import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home.component';
import { AuthGuard } from '../services/auth-guard-user.service';



const userRoutes: Routes = [
	{
		path: 'user',
		component: UserComponent,
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
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})

export class UserRoutingModule{}