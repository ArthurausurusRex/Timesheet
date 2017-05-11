import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import {UserService} from '../services/user.service';
import {Utilisateur} from '../utilisateur';
import {AlertService} from '../services/alert.service'

@Component({
	selector: 'modifier-utilisateur',
	templateUrl: 'modifier-utilisateur.component.html'
})


export class ModifierUtilisateurComponent implements OnInit{
	utilisateur : Utilisateur;
	
	roles = ['','gestionnaire', 'utilisateur', 'admin'];
	
	model = new Utilisateur('', 'azertyuiop', this.roles[0], '');
	
	submitted = false;
	
	validate=false;

	

	gestionnaires: Utilisateur[];
	modifier = false;
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
		 	.subscribe(utilisateur => {this.model = utilisateur, console.log(this.model)});
		this.userService.getGestionnaires().subscribe(data =>this.gestionnaires = data)		
		
	};

	onModifier(): void {
		this.userService.updateOne(this.model).subscribe(res=>{
			console.log(this.model);
			console.log(res);
			this.alertService.success('Utilisateur modifié avec succès');
			location.reload()})
		this.modifier=true;
		
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