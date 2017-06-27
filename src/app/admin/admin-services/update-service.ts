import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UpdateService {
    private userChangedSource = new Subject()

    
    userChanged$ = this.userChangedSource.asObservable();

    announceUserChanged(){
        this.userChangedSource.next()
    }
}