import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TimeTrackService } from '../services/time-track.service';
import { formatDate } from '@angular/common';
import { EmployeeInfoService} from '../services/employee-info.service';


@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class TimeTrackingComponent implements OnInit {
  today = new Date();
  date  =  new  FormControl(new  Date());


  constructor(private timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.timeService.timeFormData.timer_id == 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
    this.resetForm();
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
        this.toastr.error('User ID is not correct, please enter a valid one.', 'Error')
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
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US', '+1000'),
        }
  }  

}
