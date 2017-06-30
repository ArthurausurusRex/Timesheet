import { Subject } from 'rxjs/Subject';
import { TimeLine } from './../../models/timeline';
import { Injectable } from '@angular/core';


@Injectable()
export class UpdateScheduleService {

    private lineUpdatedSource = new Subject();

    lineUpdated$ = this.lineUpdatedSource.asObservable()

    announceLineUpdated() {
        this.lineUpdatedSource.next();
    }
}