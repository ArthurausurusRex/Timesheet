import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'admin-home',
	templateUrl: 'admin-home.component.html'
})


export class AdminHomeComponent{
	ajout = false;
	modifier=false;

	constructor(
		private router: Router,
		){}


	onAjout(){
		this.router.navigate(['admin/ajout'])
	}



	

}