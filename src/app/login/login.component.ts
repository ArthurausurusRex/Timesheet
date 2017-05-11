import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Utilisateur} from '../utilisateur';
import {AuthenticationService} from '../services/authentication.service';
import {AlertService} from '../services/alert.service';
import { UserService } from '../services/user.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  model: any = {};
  returnUrl: String;
  admin = new Utilisateur('admin', 'admin', 'admin')

  constructor(
    private alertService : AlertService,
  	private authenticationService : AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,

  	){};

  login(){
  	this.authenticationService.login(this.model.email, this.model.password)
  	.subscribe(
  		data => {
               this.router.navigate(['/'+this.authenticationService.currentUser().role])
              }, //renvoyer vers la bonne page

  		error => {this.alertService.error(error.json().message)}
      );  	
  }

  createAdmin(){
    this.userService.create(this.admin).subscribe()
  };


 
}
