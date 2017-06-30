
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

    getTimeLinesByMonth(month: String) : Observable<any> {
        return this.http.get(apiUrl + `/timelines/${month}`, this.jwt())
        .map(response => response.json());
            /*console.log(response.json())*/
        
    }

    deleteTimeLine(_id: String) : Observable<any> {
        return this.http.delete(apiUrl +`/timelines/${_id}`, this.jwt() )

    }

    updateTimeLine(timeLine): Observable <any> {
        return this.http.put(apiUrl+ +`/timelines/${timeLine._id}`,timeLine, this.jwt()).map(res=>res.json())
    }

}
