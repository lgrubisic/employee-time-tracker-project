import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserEmployeeInfoComponent } from './employees-info/user-employee-info.component';
import { EmployeeInfoComponent } from './employees-info/employee-info/employee-info.component';
import { EmployeeInfoListComponent } from './employees-info/employee-info-list/employee-info-list.component';
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
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { TimeTrackingListComponent } from './time-tracking/time-tracking-list/time-tracking-list.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { BackendInterceptor } from './helpers/backend'
import { SidebarModule } from 'ng-sidebar';
import { AdminComponent } from './admin/admin.component';
import { UserTimeTrackingListComponent } from './time-tracking/user-time-tracking-list/user-time-tracking-list.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ManagersComponent } from './managers/managers.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { ManagerComponent } from './managers/manager/manager.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    UserEmployeeInfoComponent,
    EmployeeInfoComponent,
    EmployeeInfoListComponent,
    TimeTrackingComponent,
    TimeTrackingListComponent,
    LoginComponent,
    AdminComponent,
    UserTimeTrackingListComponent,
    CheckInComponent,
    ManagersComponent,
    ManagersListComponent,
    ManagerComponent,
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
    MDBBootstrapModule.forRoot()
  ],
  exports: [ManagersComponent],
  providers: [EmployeeInfoService, TimeTrackService, ManagerService, CookieService, DecimalPipe, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, BackendInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
