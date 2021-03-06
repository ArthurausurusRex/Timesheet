import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService} from './services/user.service';
import { AlertService} from './services/alert.service';
import { TimeLineService } from './services/time-line.service';
import { AdminModule } from './admin/admin.module';
import {AlertComponent} from './alert.component';
import { UserModule } from './user/user.module';
import { ManagerModule } from './manager/manager.module';


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
    ManagerModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    AlertService,
    TimeLineService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
