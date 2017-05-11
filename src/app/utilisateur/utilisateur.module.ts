import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {UtilisateurComponent} from './utilisateur.component';
import {UtilisateurHomeComponent} from './utilisateur-home.component';
import {UtilisateurRoutingModule} from './utilisateur-routing.module';


@NgModule({
	imports: [
		CommonModule,
		UtilisateurRoutingModule,
	],

	declarations: [
		UtilisateurComponent,
		UtilisateurHomeComponent,
	],

	providers: []
})


export class UtilisateurModule{}