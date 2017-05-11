import {Injectable} from '@angular/core';
import { Http, Headers, Response }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService{
	constructor(private http: Http){};

    saveToken( token: string) : void { //Penser que le token doit bien etre une string
        localStorage.setItem('userToken', token)
    };

    getToken() : string {
        return localStorage.getItem('userToken')
    }
    
    logout() : void{
        localStorage.removeItem('userToken');
    }

    isLoggedIn(): boolean{
        var token = this.getToken();
        var payload;

        if (token){
            payload= token.split('.')[1];
            payload =atob(payload);
            payload= JSON.parse(payload);

            return payload.exp > Date.now()/1000;
        } else {
            return false;
        }

    }

    currentUser(){
        if(this.isLoggedIn()){
            var token = this.getToken();
            var payload;
            payload = token.split('.')[1];
            
            payload = atob(payload);
            payload = JSON.parse(payload);

            return{
                email : payload.email,
                role : payload.role
            };
        }

    };



	login(email: String, password: String) {
		return this.http.post('http://localhost:8080/api/authenticate', { email: email, password: password })
            .map((response: Response) => {
                let token = response.json().token;
                if (token) {
                    this.saveToken(token);
                            }
                        },
            );
	}

}