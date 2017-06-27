import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { User } from '../user';
import { Subscription }from 'rxjs/Subscription'

import {AlertService} from '../services/alert.service';

@Component({
	selector: 'list-users',
	templateUrl: 'list-users.component.html'
})


export class ListUsersComponent implements OnInit {

	managers: User[];
	admins: User[];
	users: User[];
	userSelct : User;
	subscription : Subscription;

	constructor(
        private router: Router,
        private userService: UserService,
        private alert: AlertService
        	) {}


	ngOnInit(){
		this.getAdmins();
		this.getManagers();
		this.getUsers();
	}	



	getManagers(){
		this.userService.getManagers()
    					.subscribe(
    				data=> this.managers =  data,
    				error => console.log(error));
	}

	getUsers(){
		this.userService.getUsers()
    					.subscribe(
    				data=> {this.users =  data
    						},
    				error => console.log(error));

	}

	getAdmins(){
		this.userService.getAdmins()
    					.subscribe(
    				data=> this.admins =  data,
    				error => console.log(error));
	}

	onModify(user : User): void {
		this.userSelct = user;
		this.router.navigate(['/admin/modify', this.userSelct._id]);	
	}

		
	
}