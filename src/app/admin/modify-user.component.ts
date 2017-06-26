import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import {UserService} from '../services/user.service';
import {User} from '../user';
import {AlertService} from '../services/alert.service'

@Component({
	selector: 'modify-user',
	templateUrl: 'modify-user.component.html'
})


export class ModifyUserComponent implements OnInit{
	user : User;
	
	roles = ['','manager', 'user', 'admin'];
	
	model = new User('', 'azertyuiop', this.roles[0], '');
	
	submitted = false;
	
	validate=false;

	

	managers: User[];
	modify = false;
	supprimer = false;
	constructor(
    	private userService: UserService,
    	private route: ActivatedRoute,
    	private location: Location,
    	private router: Router,
    	private alertService: AlertService
  ) {};
	

	ngOnInit(): void {
		 this.route.params
		 	.switchMap((params: Params) =>
		 		this.userService.getOne(params['_id']))
		 	.subscribe(user => {this.model = user, console.log(this.model)});
		this.userService.getManagers().subscribe(data =>this.managers = data)		
		
	};

	onModify(): void {
		this.userService.updateOne(this.model).subscribe(res=>{
			console.log(this.model);
			console.log(res);
			this.alertService.success('Utilisateur modifié avec succès');
			location.reload()})
		this.modify=true;
		
		this.router.navigate(['/admin']);
	};

	onSupprimer(): void {
		this.userService.deleteOne(this.model._id).subscribe(res=>{
			this.alertService.success('Utilisateur supprimé avec succès')
			location.reload()});
		this.supprimer=true;

		this.router.navigate(['/admin'])
	}


}