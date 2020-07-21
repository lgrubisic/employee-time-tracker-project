import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../services/employee-info.service';
import { ToastrService } from 'ngx-toastr';
import { TimeTrackService } from '../services/time-track.service';
import { NgForm, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  today = new Date();
  date = new FormControl(new Date());
  currUser: number = this.authService.currentUserValue.id_num;
  user = document.getElementById('employee_init_id') as HTMLInputElement;

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService, public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.timeService.timeFormData.employee_init_id = this.currUser;
  }

  onSubmit(timeForm: NgForm) {
    if (this.timeService.timeFormData.timer_id == 0) {
      this.insertRecord(timeForm);
      this.resetForm();
    }
    else {
      this.updateRecord(timeForm);
      this.resetForm();
    }
    this.resetForm();
  }

  clockOut() {

  }

  updateRecord(timeForm: NgForm) {
    this.timeService.putTimeTracking().subscribe(
      res => {
        this.resetForm(timeForm);
        this.toastr.info('Updated successfully', 'Time Tracking Register');
        this.timeService.refreshTimeList();
      },
      err => {
        this.toastr.error(err.message, "Error!");
      }
    )
  }

  insertRecord(timeForm: NgForm) {
    this.timeService.postTimeTracking().subscribe(
      res => {
        this.resetForm(timeForm);
        this.timeService.refreshTimeList();
      },
      err => {
        this.toastr.error(err.message, "Error!");
      }
    )
  }

  resetForm(timeForm?: NgForm) {
    if (timeForm != null)
      timeForm.form.reset();
    this.timeService.timeFormData = {
      timer_id: 0,
      employee_init_id: 0,
      date_of_work: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      time_in: formatDate(this.today, 'HH:mm:ss', 'en-US'),
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US', '+1000'),
    }
  }

}
