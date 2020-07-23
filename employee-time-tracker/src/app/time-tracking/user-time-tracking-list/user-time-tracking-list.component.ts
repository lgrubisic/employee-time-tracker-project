import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TimeTrack } from 'src/app/models/time-track.model';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

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
  
  constructor(public timeService: TimeTrackService, private toastr: ToastrService, private authenticationService: AuthenticationService) {}
   

  ngOnInit(): void {
    this.getCurrentUserTimeTrack();
    for(let ts of this.currentUserTimeStamps) {
      if(ts.date_of_work !== formatDate(new Date(), 'yyyy-MM-dd', 'en')) {
        this.toastr.error("Error", "Error");
      } else {
        this.toastr.success("Success", "Success"); 
      }
    }
  }

  getCurrentUserTimeTrack(): void{

    let allTimeTracks = this.timeService.getAll();
    allTimeTracks.forEach(function (value){
      for(let i = 0; i < value.length; i++){
        if(value[i].employee_init_id === this.authenticationService.currentUserValue.id_num){
          this.currentUserTimeStamps.push(value[i]);
        }
      }
      this.totalTimeWorked = this.calculateTotalTimeWorked();
      //console.log(this.totalTimeWorked+"finally");
    }.bind(this));
  }

  calculateTotalTimeWorked(): number{
    let totalHoursWorked = 0;
    this.currentUserTimeStamps.forEach(date => {
      totalHoursWorked += this.calculateTimeWorkedOfTheDay(date.date_of_work, date.time_in, date.time_out);
      //totalHoursWorked += this.calculateTimeWorkedOfTheDay("2020-07-21T00:00:00","21:55:55","01:35:57");//testing
      //console.log(totalHoursWorked);
    });
    return parseFloat(totalHoursWorked.toFixed(3));
  }

  calculateTimeWorkedOfTheDay(date: String, _start: String, _end: String){
    let d1 = new Date(date.substring(0,10) +"T"+_start+"Z");  
    let d2 = new Date(date.substring(0,10) +"T"+_end+"Z"); 
    let _24hinMiliseconds = 86400000;
    if(d1.getTime() > d2.getTime()){
      let total = (_24hinMiliseconds - d1.getTime())+d2.getTime();
      //console.log(this.convertMilisecondsToHours(total).toFixed(3));
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }else{
    let total = d2.getTime() - d1.getTime();
    //console.log(this.convertMilisecondsToHours(total).toFixed(3));
    return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }

  }

  convertMilisecondsToHours(ms: number):number{
      let hours =((ms/1000)/60)/60;
      return hours;
  }
  
}