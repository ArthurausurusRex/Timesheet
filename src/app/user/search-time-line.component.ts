
import { Component, OnInit } from '@angular/core';

import { TimeLineService } from './../services/time-line.service';
import { TimeLine } from './../models/timeline';

@Component({
    selector: 'search-time-line',
    templateUrl: 'search-time-line.component.html'
})

export class SearchTimeLineComponent implements OnInit {
    month : String;
    year : String;
    timeLines: Array<TimeLine>
    constructor(private timeLineService : TimeLineService) { }
 
    ngOnInit() { }

    search(){
        this.timeLineService.getTimeLinesByDate(this.month, this.year).subscribe(
            data =>{
                this.timeLines= data;
                console.log(data)
            }
        )
    }
    
}