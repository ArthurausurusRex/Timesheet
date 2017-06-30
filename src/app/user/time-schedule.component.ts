import { Component, OnInit} from '@angular/core';
import { Subscription }from 'rxjs/Subscription'

import { Line } from './../models/line';
import { TimeLine } from './../models/timeline';
import { UpdateScheduleService } from './user-service/update-schedule.service';
import { TimeLineService } from '../services/time-line.service';





@Component({
    selector: 'time-schedule',
    templateUrl: 'time-schedule.component.html'
})

export class TimeScheduleComponent implements OnInit {


    lines= [];
    timeLines= [];
    numberOfDays = 31;
    firstLine = new Line(this.numberOfDays, 'Contrats', 'Nom client', 'Nom du projet', 0,true);
    timeLineSelected : any;
    date = new Date();
    month = ''+ this.date.getMonth();
    subscription : Subscription;
    
    constructor(
        private updateLineService: UpdateScheduleService,
        private timeLineService: TimeLineService
    ){
        this.subscription = updateLineService.lineUpdated$.subscribe(Response => this.ngOnInit());
    }


    ngOnInit() {
        this.getTimeLines(this.month);
     };

    selectLine(timeLine: TimeLine){
        console.log(this.lines.indexOf(timeLine));
    }

    getTimeLines(month : String){
        this.timeLineService.getTimeLinesByMonth(month).subscribe(
            data => {this.timeLines = data;
                 console.log(this.timeLines)},
            error => console.log(error),

        );
    }

    deleteTimeLine(){
        this.timeLineService.deleteTimeLine(this.timeLineSelected._id).subscribe(
            data => this.ngOnInit(),
            err => console.log(err)
        );
    }

    updateTimeLine(){
        this.timeLineService.updateTimeLine(this.timeLineSelected).subscribe(
            data => this.ngOnInit(),
            err => console.log(err)
        );
    }
}
