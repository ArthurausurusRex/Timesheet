import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home.component';
import { AuthGuard } from '../services/auth-guard-user.service';
import { SearchTimeLineComponent } from './search-time-line.component';
import { TimeScheduleComponent } from './time-schedule.component';




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
					{
						path: '',
						component: UserHomeComponent,
					}
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