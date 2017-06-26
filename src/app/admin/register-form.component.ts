import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { User } from '../user';
import { AlertService } from '../services/alert.service';



@Component({
	selector: 'register-form',
	templateUrl: 'register-Form.component.html'

})

export class RegisterFormComponent implements OnInit {

	roles = ['','manager', 'user', 'admin'];
	model = new User('', 'azertyuiop', this.roles[0], '');
	submitted = false;
	
	managers: User[];


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

    getManagers(){
    	this.userService.getManagers()
    					.subscribe(
    				data=> this.managers =  data,
    				error => console.log(error));
    					

   }

    ngOnInit(){
    	this.getManagers();
    }

}