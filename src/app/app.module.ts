import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import{AlertService} from './services/alert.service';
import { AdminModule } from './admin/admin.module';
import {AlertComponent} from './alert.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [AUTH_PROVIDERS, AuthenticationService, UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
