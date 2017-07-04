import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { Subscription }from 'rxjs/Subscription'

import {AlertService} from '../services/alert.service';
@Component({
	selector: 'list-managed-users',
	templateUrl: 'list-managed-users.component.html'
})


export class ListManagedUsersComponent implements OnInit {

	
	managedUsers: User[];
	userSelct : User;
	subscription : Subscription;

	constructor(
        private router: Router,
        private userService: UserService,
        private alert: AlertService,
        private authenticationService: AuthenticationService
        	)
			{
				//this.subscription=updateService.userChanged$.subscribe(Response=> this.ngOnInit()
                //)
			}


	ngOnInit(){
		
	}	



	/*getManagedUsers(){
		this.userService.getManagedUsers(this.authenticationService.currentUser().email)
    					.subscribe(
    				data=> {this.managedUsers =  data
    						},
    				error => console.log(error));

	}*/

    
		
	
}