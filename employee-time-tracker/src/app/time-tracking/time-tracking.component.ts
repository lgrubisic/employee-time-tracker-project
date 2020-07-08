import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TimeTrackService } from '../shared/time-track.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css']
})
export class TimeTrackingComponent implements OnInit {
  today = new Date();

  constructor(private timeService: TimeTrackService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.timeService.timeFormData.timer_id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  updateRecord(form: NgForm) {
    this.timeService.putTimeTracking().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Time Tracking Register');
        this.timeService.refreshTimeList();
      },
      err => {
        //console.log(err);
        console.log(err.message);
      }
    )
  }

  insertRecord(form: NgForm) {
    this.timeService.postTimeTracking().subscribe(
      res => {
        this.resetForm(form);
        this.timeService.refreshTimeList();
      },
      err => { 
        //console.log(err); 
        console.log(err.message);
      }
    )
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.timeService.timeFormData = {
      timer_id: 0,
      employee_init_id: 0,
      date_of_work: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      time_in: formatDate(this.today, 'HH:mm:ss', 'en-US'),
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US'),
        }
  }  

}
