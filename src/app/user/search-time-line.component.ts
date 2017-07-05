
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
    timeLines: Array<TimeLine>
    constructor(private updateService: UpdateScheduleService) { }

    ngOnInit() { }

    search() {
        const month = this.month;
        const year = this.year;
        this.updateService.announceLineSearched(month, year);
    }
}
