import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {UserComponent} from './user.component';
import {UserHomeComponent} from './user-home.component';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
	imports: [
		CommonModule,
		UserRoutingModule,
	],

	declarations: [
		UserComponent,
		UserHomeComponent,
	],

	providers: []
})


export class UserModule{}