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
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
 
import { ToastrModule } from 'ngx-toastr';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingListComponent } from './time-tracking/time-tracking-list/time-tracking-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesInfoComponent,
    EmployeeInfoComponent,
    EmployeeInfoListComponent,
    TimeTrackingComponent,
    TimeTrackingListComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatRadioModule, 
    MatSelectModule,
    MatNativeDateModule,
    RoutingModule
  ],
  providers: [EmployeeInfoService, TimeTrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
