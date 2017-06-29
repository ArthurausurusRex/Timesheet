import { Subject } from 'rxjs/Subject';
import { TimeLine } from './../../models/timeline';
import { Injectable } from '@angular/core';


@Injectable()
export class UpdateScheduleService {

    private newLineCreatedSource = new Subject<TimeLine>();

    newLineCreated$ = this.newLineCreatedSource.asObservable()

    NewLine(timeLine : TimeLine) {
        this.newLineCreatedSource.next(timeLine);
    }
}