
import { Component, OnInit } from '@angular/core';

import { UpdateScheduleService } from './user-service/update-schedule.service';
import { TimeLine } from './../models/timeline';

@Component({
    selector: 'search-time-line',
    templateUrl: 'search-time-line.component.html'
})

export class SearchTimeLineComponent implements OnInit {
    month: string;
    year: string;
    timeLines: Array<TimeLine>;
    months = ["janvier", "févier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    constructor(private updateService: UpdateScheduleService) { }

    ngOnInit() { }

    search() {
        const numMonth = '' + this.months.indexOf(this.month);
        console.log(numMonth);
        const year = this.year;
        this.updateService.announceLineSearched(numMonth, year);
    }
}
