import { Subject } from 'rxjs/Subject';
import { TimeLine } from './../../models/timeline';
import { Injectable } from '@angular/core';


@Injectable()
export class UpdateScheduleService {

    private lineUpdatedSource = new Subject();
    private lineSearchedSource = new Subject<[string, string]>()

    lineUpdated$ = this.lineUpdatedSource.asObservable();
    lineSearched$ = this.lineSearchedSource.asObservable();

    announceLineUpdated() {
        this.lineUpdatedSource.next();
    }

    announceLineSearched(month: string, year: string){
        this.lineSearchedSource.next([month, year]);
    }
}