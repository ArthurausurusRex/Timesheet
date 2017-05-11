import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UtilisateurComponent } from './utilisateur.component';
import { UtilisateurHomeComponent } from './utilisateur-home.component';
import { AuthGuard } from '../services/auth-guard-utilisateur.service';



const utilisateurRoutes: Routes = [
	{
		path: 'utilisateur',
		component: UtilisateurComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path:'',
				canActivateChild: [AuthGuard],
				children: [
				]
			}
		]

	}
];


@NgModule({
	imports: [RouterModule.forChild(utilisateurRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})

export class UtilisateurRoutingModule{}