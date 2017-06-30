
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {AuthenticationService} from './authentication.service';
import { User } from '../user';
import { apiUrl } from '../app.config';
import { TimeLine } from './../models/timeline';

@Injectable()
export class TimeLineService{

    constructor(private http: Http, private authService : AuthenticationService) { }
   
    jwt() : RequestOptions {
        const headers = new Headers({ 'Authorization': this.authService.getToken() });
//        console.log(headers);
        const options = new RequestOptions({ headers: headers })
        return options;
    }

    create(timeLine : TimeLine){
        return this.http.post(apiUrl + '/timelines', timeLine, this.jwt())
            .map((response: Response) => {
                    console.log(response.json().message);
                }
            );

    }

}
