import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'admin-home',
	templateUrl: 'admin-home.component.html'
})


export class AdminHomeComponent{
	add = false;
	modify=false;

	constructor(
		private router: Router,
		){}


	onAdd(){
		this.router.navigate(['admin/add'])
	}



	

}