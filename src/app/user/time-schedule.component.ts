import { Component, OnInit} from '@angular/core';
import { Subscription }from 'rxjs/Subscription'

import { Day } from './../models/day'
import { Line } from './../models/line';
import { TimeLine } from './../models/timeline';
import { UpdateScheduleService } from './user-service/update-schedule.service';
import { TimeLineService } from '../services/time-line.service';





@Component({
    selector: 'time-schedule',
    templateUrl: 'time-schedule.component.html',
    styleUrls:['./time-schedule.component.css']
})

export class TimeScheduleComponent implements OnInit {


    date = new Date();
    month = this.date.getMonth()
    year= ''+ this.date.getFullYear();
    lines= new Array<Line>();
    timeLines= Array<TimeLine>();
    timeLineSelected : TimeLine;
    daySelected : Day;
    firstLine = new Line('Contrats', 'Nom client', 'Nom projet', 0, true, this.month, this.year);
    lastLine = new Line('Total', 'Total', 'Total', 0, false, this.month, this.year);

    subscription: Subscription;
    searchSubscription: Subscription;
    timeLinesSubmitted: boolean;
    canSubmit: boolean;


    constructor(
        private updateLineService: UpdateScheduleService,
        private timeLineService: TimeLineService)
        {
        this.subscription = updateLineService.lineUpdated$.subscribe(Response => this.ngOnInit());
        this.searchSubscription =updateLineService.lineSearched$.subscribe(Response => this.onSearch(Response))
        this.canSubmit=false;
    }


    ngOnInit() {
        this.getTimeLines(''+this.month, this.year);
        console.log('onInit')
     };

    getTimeLines(month : String, year: String){
        this.timeLineService.getTimeLinesByDate(month, year).subscribe(
            data => {this.timeLines = data;
                    this.setTotal();
                    this.timeLinesSubmitted=this.checkTimeLinesSubmitted()},
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
        this.timeLineSelected.line.workedDays = 0;
        for (let day of this.timeLineSelected.line.days){
            this.timeLineSelected.line.workedDays = this.timeLineSelected.line.workedDays + day.value;
        }

    }

    updateDay(day: Day, value){
        day.value = parseFloat(value);
        day.modify = false;
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
            this.canSubmit = this.checkTotal()
        }
    }

    submitTimeLines(){
        for (let timeLine of this.timeLines){
            this.timeLineSelected = timeLine;
            this.timeLineSelected.submitted = true;
            this.updateTimeLine();
        }
    }

    checkTimeLinesSubmitted(): boolean {
        for (const timeLine of this.timeLines){
            if (!timeLine.submitted){
                return false;
            }
        }
        return true;
    }

    checkTotal(): boolean {
        const num = this.lastLine.getNumOfWorkedDays();
        if (this.lastLine.workedDays !== num){
            return false;
        }
        return true;
    }

    onSearch([month, year]){
        this.month = month;
        this.year = year;
        this.getTimeLines(month, year);
        this.firstLine = new Line('Contrats', 'Nom client', 'Nom projet', 0, true, parseInt(month), parseInt(year));
        this.lastLine = new Line('Total', 'Total', 'Total', 0, false, parseInt(month), parseInt(year));

    }
}
