import { TimeLineService } from './../services/time-line.service';
import { UpdateScheduleService } from './user-service/update-schedule.service';
import { TimeLine } from './../models/timeline';
import { Line } from '../models/line';

import { Component } from '@angular/core';

@Component({
    selector: 'new-line-form',
    templateUrl: 'new-line-form.component.html'
})

export class NewLineFormComponent  {
     addline= false;
     numberOfDays = 31;
     line = new Line(this.numberOfDays, '','','',0 ,false);
    
    constructor(
        private updateLineService : UpdateScheduleService,
        private timeLineService : TimeLineService,
                ) { }

    addLine(){
        this.addline = false;
        console.log(this.line);
        const timeLine = new TimeLine(this.line);
        this.timeLineService.create(timeLine).subscribe(
            data => {
                this.updateLineService.announceLineUpdated();
            }
        );

    }

}