import { Component, OnInit} from '@angular/core';

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
    firstLine = new TimeLine(new Line(this.numberOfDays, 'Contrats', 'Nom client', 'Nom du projet', 0,true));
    lineSelected : number;
    month = '1';
    result: any;
    
    constructor(
        private updateLineService: UpdateScheduleService,
        private timeLineService: TimeLineService
    ){}


    ngOnInit() {
   
     };

    selectLine(timeLine: TimeLine){
        console.log(this.lines.indexOf(timeLine));
    }

    getTimeLines(month : String){
        this.timeLineService.getTimeLinesByMonth(month).subscribe(
            data => {this.result = data,
                 console.log(data)},
            error => console.log(error),

        );
    }

    testButton(){
        this.getTimeLines(this.month);
    }
}
