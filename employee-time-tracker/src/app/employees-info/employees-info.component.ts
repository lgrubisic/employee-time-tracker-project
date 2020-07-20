import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TimeTrackService } from '../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfoService } from '../services/employee-info.service';
import { NgForm, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {
  private _opened: boolean = false;
  today = new Date();
  date  =  new FormControl(new Date());
  userIdPlaceholder: Number = this.logoutService.currentUserValue.id_num;  

  constructor(private logoutService : AuthenticationService, private timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService) { }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  showDiv = {
    timeData : true
    }

  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }

  onSubmit(checkInForm: NgForm) {
    if (this.timeService.timeFormData.timer_id == 0) {
      this.insertRecord(checkInForm);
      //this.toastr.success("Successully checked in", "Success");
    }
    else {
      //this.updateRecord(checkInForm);
      this.toastr.error('Not gud', 'Error')
    }
    this.resetForm();
  }

  insertRecord(checkInForm: NgForm) {
    this.timeService.postTimeTracking().subscribe(
      res => {
        this.resetForm(checkInForm);
        this.timeService.refreshTimeList();
      },
      err => { 
        this.toastr.error(err.message)
      }
    )
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(checkInForm?: NgForm) {
    if (checkInForm != null)
    checkInForm.form.reset();
    this.timeService.timeFormData = {
      timer_id: 0,
      employee_init_id: 0,
      date_of_work: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      time_in: formatDate(this.today, 'HH:mm:ss', 'en-US'),
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US', '+1000'),
    }
  }  

}
