import { Line } from './../models/line';
import { UpdateScheduleService } from './user-service/update-schedule.service';
import { Component, OnInit} from '@angular/core';
import { TimeLine } from './../models/timeline';



@Component({
    selector: 'time-schedule',
    templateUrl: 'time-schedule.component.html'
})

export class TimeScheduleComponent implements OnInit {


    lines= [];
    numberOfDays = 31;
    firstLine = new TimeLine(new Line(this.numberOfDays, 'Contrats', 'Nom client', 'Nom du projet', 0,true));
    lineSelected : number;

    constructor(private updateLineService: UpdateScheduleService){
        updateLineService.newLineCreated$.subscribe(
            line => {
                console.log(line)
                this.lines.push(line)
             });
    }


    ngOnInit() { };

    selectLine(timeLine: TimeLine){
        console.log(this.lines.indexOf(timeLine));
    }
}
