import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {AuthenticationService} from './authentication.service';
import { User } from '../user';
import {apiUrl} from '../app.config';

@Injectable()
export class UserService {


    constructor(private http: Http, private authService : AuthenticationService) { }

    jwt() : RequestOptions {
        let headers = new Headers({ 'Authorization': this.authService.getToken() });
//        console.log(headers);
        let options = new RequestOptions({ headers: headers })
        return options
    }


    create(user: User) {
     	return this.http.post(apiUrl+'/users', user, this.jwt())
     		.map((response: Response) => 
               {
                let token = response.json().token;
                if (token) {
                    console.log('création reussie', token);
                	}
                })

    };

    getAll(): Observable<any>{
        return this.http.get(apiUrl+'/users', this.jwt())
                    .map(res =>res.json());
    }

    getManagers(): Observable<any>{
    	return this.http.get(apiUrl+'/users/role/manager', this.jwt())
    				.map(res =>res.json());
    }

    getAdmins(): Observable<any>{
        return this.http.get(apiUrl+'/users/role/admin', this.jwt())
                    .map(res =>res.json());
    }

    getUsers(): Observable<any>{
        return this.http.get(apiUrl+'/users/role/user', this.jwt())
                    .map(res =>res.json());
    }

    getOne(_id :string): Observable<any>{
        const url = apiUrl+`/users/${_id}`;
        return this.http.get(url, this.jwt()).map(res => res.json());
    }

    deleteOne(_id: string): Observable<any>{
        const url = apiUrl+`/users/${_id}`;
        return this.http.delete(url, this.jwt()).map(res => res.json());
    }

    updateOne(user: User): Observable<any> {
        const url = apiUrl+`/users/${user._id}`;
        return this.http.put(url, user, this.jwt()).map(res => res.json());
    }

}


