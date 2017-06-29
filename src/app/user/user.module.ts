import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {UserComponent} from './user.component';
import {UserHomeComponent} from './user-home.component';
import {UserRoutingModule} from './user-routing.module';
import { TimeScheduleComponent } from './time-schedule.component';
import { NewLineFormComponent} from './new-line-form.component';
import { UpdateScheduleService } from './user-service/update-schedule.service';

@NgModule({
	imports: [
		CommonModule,
		UserRoutingModule,
		FormsModule,
	],

	declarations: [
		UserComponent,
		UserHomeComponent,
		TimeScheduleComponent,
		NewLineFormComponent
	],

	providers: [UpdateScheduleService]
})


export class UserModule{}