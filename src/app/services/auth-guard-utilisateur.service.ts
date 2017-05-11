import { Injectable } from '@angular/core';
import { Router,
 	CanActivate,
 	ActivatedRouteSnapshot, 
 	RouterStateSnapshot, 
 	CanActivateChild
 	} 					from '@angular/router';

import {AuthenticationService} from './authentication.service'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router,
                private authenticationService: AuthenticationService
                ) { }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if (this.authenticationService.currentUser().role=='utilisateur') {
            return true;
        }

        else{
        this.router.navigate(['/login']);
        return false;}
    };

    canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

}