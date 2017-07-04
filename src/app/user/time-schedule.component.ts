import { Component, OnInit} from '@angular/core';
import { Subscription }from 'rxjs/Subscription'

import { Day } from './../models/day'
import { Line } from './../models/line';
import { TimeLine } from './../models/timeline';
import { UpdateScheduleService } from './user-service/update-schedule.service';
import { TimeLineService } from '../services/time-line.service';





@Component({
    selector: 'time-schedule',
    templateUrl: 'time-schedule.component.html'
})

export class TimeScheduleComponent implements OnInit {


    lines= new Array<Line>();
    timeLines= Array<TimeLine>();
    firstLine = new Line('Contrats', 'Nom client', 'Nom projet', 0,true);
    lastLine = new Line('Total', 'Total','Total',0,false);
    timeLineSelected : TimeLine;
    daySelected : Day;
    date = new Date();
    month = ''+ this.date.getMonth();
    subscription : Subscription;
    

    
    constructor(
        private updateLineService: UpdateScheduleService,
        private timeLineService: TimeLineService){
        this.subscription = updateLineService.lineUpdated$.subscribe(Response => this.ngOnInit());
        console.log(new Date(2017,6,2))
    }


    ngOnInit() {
        this.getTimeLines(this.month);
     };

    getTimeLines(month : String){
        this.timeLineService.getTimeLinesByMonth(month).subscribe(
            data => {this.timeLines = data;
                    this.setTotal()},
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

    updateWorkedDays(){
        this.timeLineSelected.line.workedDays=0;
        for (let day of this.timeLineSelected.line.days){
            this.timeLineSelected.line.workedDays = this.timeLineSelected.line.workedDays + day.value;
        }

    }

    updateDay(day: Day, value){
        day.value=parseFloat(value);
        day.modify=false;
        this.setTotal();
        this.updateWorkedDays();
        this.updateTimeLine();

    }

    setTotal(){
        for (let day of this.lastLine.days){
            let total = 0;
            let i = day.numOfDay;
            let workDayTotal = 0
            for (let timeLine of this.timeLines){
                total = total+timeLine.line.days[i-1].value
                workDayTotal = timeLine.line.workedDays + workDayTotal
            }
            this.lastLine.workedDays=workDayTotal;
            day.value=total;
        }
    }

    
}
