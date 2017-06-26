import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import { User } from '../user';


@Injectable()
export class UserService {
	  

    constructor(private http: Http) { }


    create(user: User) {
     	return this.http.post('http://localhost:8080/api/users', user)
     		.map((response: Response) => 
               {
                let token = response.json().token;
                if (token) {
                    console.log('création reussie', token);
                	}
                })

    };

    getAll(): Observable<any>{
        return this.http.get('http://localhost:8080/api/users')
                    .map(res =>res.json());
    }

    getManagers(): Observable<any>{
    	return this.http.get('http://localhost:8080/api/users/role/gestionnaire')
    				.map(res =>res.json());
    }

    getAdmins(): Observable<any>{
        return this.http.get('http://localhost:8080/api/users/role/admin')
                    .map(res =>res.json());
    }

    getUsers(): Observable<any>{
        return this.http.get('http://localhost:8080/api/users/role/user')
                    .map(res =>res.json());
    }

    getOne(_id :string): Observable<any>{
        const url = `http://localhost:8080/api/users/${_id}`;
        return this.http.get(url).map(res => res.json());
    }

    deleteOne(_id: string): Observable<any>{
        const url = `http://localhost:8080/api/users/${_id}`;
        return this.http.delete(url).map(res => res.json());
    }

    updateOne(user: User): Observable<any> {
        const url = `http://localhost:8080/api/users/${user._id}`;
        return this.http.put(url, user).map(res => res.json());
    }

}


