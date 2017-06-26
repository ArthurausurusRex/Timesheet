import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AdminComponent} from './admin.component';
import {AdminHomeComponent} from './admin-home.component';
import {RegisterFormComponent} from './register-form.component';
import {ListUsersComponent} from './list-users.component';
import {AdminRoutingModule} from './admin-routing.module'
import {ModifyUserComponent} from './modify-user.component';
import {AdminAlertComponent} from './admin-alert.component';

@NgModule({
	imports: [
	CommonModule,
	AdminRoutingModule,
	FormsModule,
	], 

	declarations: [
		AdminComponent,
		AdminHomeComponent,
		RegisterFormComponent,
		ListUsersComponent,
		ModifyUserComponent,
		AdminAlertComponent
	],

	providers: []
})


export class AdminModule{}