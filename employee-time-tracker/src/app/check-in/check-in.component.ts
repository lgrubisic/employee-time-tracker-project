import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../services/employee-info.service';
import { ToastrService } from 'ngx-toastr';
import { TimeTrackService } from '../services/time-track.service';
import { NgForm, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import {TimeTrack} from '../models/time-track.model';

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
  clockedIn: boolean = false;

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService, public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.resetForm();
    this.timeService.timeFormData.employee_init_id = this.currUser; 

    this.isLastEntryTimeOutEntered();
  }

  onSubmit(timeForm: NgForm) {
    this.clockedIn = true;
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
    //create method to update last record time-out with current time
    this.clockedIn = false;
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
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US'),
      //time_out: formatDate(this.today, 'HH:mm:ss', 'en-US','+1000'),
    }
  }

  isLastEntryTimeOutEntered(){
    this.timeService.getAll().subscribe(res => {//get list of timestamps of current user
        //console.log(res);
        console.log("testing");
        //console.log(this.getTimeTrackOfCurrentUser(res));
        let allCurrentUserTimeTrackData = this.getTimeTracksOfCurrentUser(res);
        if(allCurrentUserTimeTrackData.length===0){//if no entries exists stop.
          this.clockedIn = false;//enable the clock in button
          console.log("No time records");
        }else{
          let lastEntry = allCurrentUserTimeTrackData[allCurrentUserTimeTrackData.length-1];//get last time record
          if(lastEntry.date_of_work.substring(0,10) === ""+formatDate(new Date(), 'yyyy-MM-dd', 'en')){//compare last time record date with todays date
            console.log("Dates are the same with last record and todays date are equal");
            if(lastEntry.time_in === lastEntry.time_out){//if time-out has not been entered.
              this.clockedIn = true;//disable clock-in button, clock-out button is enabled.
              console.log("times are the same must update record!!!");
            }
          }
          console.log(lastEntry);
        }
    });
  }

  getTimeTracksOfCurrentUser(data: TimeTrack[]){
      let currentUserTimeTracks = [];
      data.forEach(element => {
        if(element.employee_init_id == this.timeService.timeFormData.employee_init_id){
          currentUserTimeTracks.push(element);
        }
      });
      return currentUserTimeTracks
  }

}
