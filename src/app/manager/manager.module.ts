import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {ManagerComponent} from './manager.component';
import {ManagerHomeComponent} from './manager-home.component';
import {ManagerRoutingModule} from './manager-routing.module';
import {ListManagedUsersComponent} from './list-managed-users.component'

@NgModule({
	imports: [
		CommonModule,
		ManagerRoutingModule,
	],

	declarations: [
		ManagerComponent,
		ManagerHomeComponent,
        ListManagedUsersComponent,
	],

	providers: []
})


export class ManagerModule{}