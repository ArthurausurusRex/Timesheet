import { TimeScheduleComponent } from './time-schedule.component';
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
		TimeScheduleComponent,
	],

	providers: []
})


export class UserModule{}