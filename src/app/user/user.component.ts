import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService} from '../services/authentication.service';





@Component({
	templateUrl:'user.component.html'
})


export class  UserComponent{

	constructor(
		private router : Router,
		private authenticationService : AuthenticationService,
		){};


	logout(){
	 	this.authenticationService.logout();
	 	this.router.navigate(['/login'])
	 }
}