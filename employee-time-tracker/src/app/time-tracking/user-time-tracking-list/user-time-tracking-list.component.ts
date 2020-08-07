import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TimeTrack } from 'src/app/models/time-track.model';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HelperMethods } from '../../services/helper.service';


@Component({
  selector: 'app-user-time-tracking-list',
  templateUrl: './user-time-tracking-list.component.html',
  styleUrls: ['./user-time-tracking-list.component.css']
})
export class UserTimeTrackingListComponent implements OnInit {

  public currentUserTimeStamps: TimeTrack[] = [];
  public totalTimeWorked: number;
  today = new Date();
  date = new FormControl(new Date());

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, private authenticationService: AuthenticationService, public helper: HelperMethods) { }

  ngOnInit(): void {
    this.getCurrentUserTimeTrack();
    for (let ts of this.currentUserTimeStamps) {
      if (ts.date_of_work !== formatDate(new Date(), 'yyyy-MM-dd', 'en')) {
        this.toastr.error("Error", "Error");
      } else {
        this.toastr.success("Success", "Success");
      }
    }
  }
  /**
   * get timeTrack records that belong to current user
   */
  getCurrentUserTimeTrack(): void{
    let allTimeTracks = this.timeService.getAll();
    allTimeTracks.forEach(function (value) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].employee_init_id === this.authenticationService.currentUserValue.id_num) {
          this.currentUserTimeStamps.push(value[i]);
        }
      }
      this.totalTimeWorked = this.calculateTotalTimeWorked();
    }.bind(this));
  }
  /**
   * calculates total hours worked from all records.
   */
  calculateTotalTimeWorked(): number{
    let totalHoursWorked = 0;
    this.currentUserTimeStamps.forEach(date => {
      totalHoursWorked += this.calculateTimeWorkedOfTheDay(date.date_of_work, date.time_in, date.time_out);
    });
    return parseFloat(totalHoursWorked.toFixed(3));
  }
  /**
   * Get hours worked in a day
   * @param date 
   * @param _start 
   * @param _end 
   */
  calculateTimeWorkedOfTheDay(date: String, _start: String, _end: String){
    let d1 = new Date(date.substring(0,10) +"T"+_start+"Z");  
    let d2 = new Date(date.substring(0,10) +"T"+_end+"Z"); 
    let _24hinMiliseconds = 86400000;
    if(d1.getTime() > d2.getTime()){
      let total = (_24hinMiliseconds - d1.getTime())+d2.getTime();
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }else{
    let total = d2.getTime() - d1.getTime();
    return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }

  }
  /**
   * converts miliseconds to hours
   * @param ms when subtracting time it return in miliseconds.
   */
  convertMilisecondsToHours(ms: number):number{
      let hours =((ms/1000)/60)/60;
      return hours;
  }
  /**
   * Turns hours remainder to minutes
   * @param hours total hours workde in decimals
   * @return minutes that was converted from hours remainder.
   */
  roundHourRemainderToMinutes(hours: number){
    let wholeHours = Math.floor(hours);
    let remainder = hours - wholeHours;
    let minutes = remainder * 60;
    return Math.floor(minutes);
  }
  /**
   * Formating total hours worked to whole hours and minutes.
   * @param totalTimeInHours total hours worked by employee in total
   */
  formatTotalTimeWorked(totalTimeInHours: number): string{
      let hours = Math.floor(totalTimeInHours);
      let minutes = this.roundHourRemainderToMinutes(totalTimeInHours);
      return hours+"h "+minutes+"m";
  }
}