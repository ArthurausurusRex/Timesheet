import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
    selector: 'admin-alert',
    template: `<div class="containerCenter" *ngIf="message" [ngClass]="{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }">{{message.text}}</div>`
})

export class AdminAlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

}
