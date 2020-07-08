import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesInfoComponent } from './employees-info/employees-info.component';
import { EmployeeInfoComponent } from './employees-info/employee-info/employee-info.component';
import { EmployeeInfoListComponent } from './employees-info/employee-info-list/employee-info-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoService } from './shared/employee-info.service';
import { TimeTrackService } from './shared/time-track.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingListComponent } from './time-tracking/time-tracking-list/time-tracking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesInfoComponent,
    EmployeeInfoComponent,
    EmployeeInfoListComponent,
    TimeTrackingComponent,
    TimeTrackingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeInfoService, TimeTrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
