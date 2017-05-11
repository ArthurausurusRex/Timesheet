import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { Utilisateur } from '../utilisateur';
import { Subscription }from 'rxjs/Subscription'

import {AlertService} from '../services/alert.service';

@Component({
	selector: 'list-users',
	templateUrl: 'list-users.component.html'
})


export class ListUsersComponent implements OnInit {

	gestionnaires: Utilisateur[];
	administrateurs: Utilisateur[];
	utilisateurs: Utilisateur[];
	utilisateurSelct : Utilisateur;
	subscription : Subscription;

	constructor(
        private router: Router,
        private userService: UserService,
        private alert: AlertService
        	) {}


	ngOnInit(){
		this.getAdmins();
		this.getGestionnaires();
		this.getUtilisateurs();
	}	



	getGestionnaires(){
		this.userService.getGestionnaires()
    					.subscribe(
    				data=> this.gestionnaires =  data,
    				error => console.log(error));
	}

	getUtilisateurs(){
		this.userService.getUtilisateurs()
    					.subscribe(
    				data=> {this.utilisateurs =  data
    						},
    				error => console.log(error));

	}

	getAdmins(){
		this.userService.getAdmins()
    					.subscribe(
    				data=> this.administrateurs =  data,
    				error => console.log(error));
	}

	onModifier(utilisateur : Utilisateur): void {
		this.utilisateurSelct = utilisateur;
		this.router.navigate(['/admin/modifier', this.utilisateurSelct._id]);	
	}

		
	
}