import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeInfoService } from './services/employee-info.service';
import { TimeTrackService } from './services/time-track.service';
import { ManagerService } from './services/manager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingModule } from './app.routing';
import { MatIconModule } from '@angular/material/icon'
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { NewTimeTrackingComponent } from './time-tracking/new-time-tracking/new-time-tracking.component';
import { TimeTrackingListComponent } from './time-tracking/time-tracking-list/time-tracking-list.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { BackendInterceptor } from './helpers/backend'
import { SidebarModule } from 'ng-sidebar';
import { AdminComponent } from './admin/admin.component';
import { UserTimeTrackingListComponent } from './time-tracking/user-time-tracking-list/user-time-tracking-list.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ManagerViewComponent } from './managers/manager-view/manager-view.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { NewManagerComponent } from './managers/new-manager/new-manager.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HelperMethods } from './services/helper.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    NewEmployeeComponent,
    EmployeeListComponent,
    NewTimeTrackingComponent,
    TimeTrackingListComponent,
    LoginComponent,
    AdminComponent,
    UserTimeTrackingListComponent,
    CheckInComponent,
    ManagerViewComponent,
    ManagersListComponent,
    NewManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    appRoutingModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    MatIconModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [ManagerViewComponent],
  providers: [EmployeeInfoService, TimeTrackService, ManagerService, CookieService, HelperMethods, DecimalPipe, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, BackendInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
