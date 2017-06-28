import { Component, OnInit} from '@angular/core';
import { TimeLine } from './../models/timeline';



@Component({
    selector: 'time-schedule',
    templateUrl: 'time-schedule.component.html'
})

export class TimeScheduleComponent implements OnInit {

    timeLine: TimeLine;
    lines= [];
    addline= false;
    constructor() 
    { 

    }
    
    
    ngOnInit() {
        var timeLine= new TimeLine(31, 'Contrats', 'Nom client', 'Nom du projet',0,true);
        this.lines.push(timeLine)
    };

    
    addLine(){

    }
}