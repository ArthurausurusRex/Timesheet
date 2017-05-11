import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { Utilisateur } from '../utilisateur';
import { AlertService } from '../services/alert.service';



@Component({
	selector: 'register-form',
	templateUrl: 'register-Form.component.html'

})

export class RegisterFormComponent implements OnInit {

	roles = ['','gestionnaire', 'utilisateur', 'admin'];
	model = new Utilisateur('', 'azertyuiop', this.roles[0], '');
	submitted = false;
	
	gestionnaires: Utilisateur[];


	constructor(
        private router: Router,
        private userService: UserService,
        private alert: AlertService
        ) { }
        
	onSubmit(){this.submitted=true};

	register() {
		console.log('envoyé')
        this.userService.create(this.model)
            .subscribe(
            	data => {
            			this.alert.success('Utilisateur créé avec succès');
                        location.reload();
                    }
            	);
        this.router.navigate(['/admin'])
        };

    getGestionnaires(){
    	this.userService.getGestionnaires()
    					.subscribe(
    				data=> this.gestionnaires =  data,
    				error => console.log(error));
    					

   }

    ngOnInit(){
    	this.getGestionnaires();
    }

}