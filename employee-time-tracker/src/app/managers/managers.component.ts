import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../services/employee-info.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfo } from '../models/employee-info.model';
import { AuthenticationService } from '../services/authentication.service';
import { TimeTrack } from '../models/time-track.model';
import { TimeTrackService } from '../services/time-track.service';
import { formatDate, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
  providers: [DecimalPipe]
})
export class ManagersComponent implements OnInit {
  private _opened: boolean = false;
  public managersEmployeesList: EmployeeInfo[] = [];
  public currentManagerId: number;
  public userTimeStamps: TimeTrack[] = [];

  constructor(private managersEmployees: EmployeeInfoService, private authenticationService: AuthenticationService, public timeService: TimeTrackService, private toastr: ToastrService) {
  }

  /**
  * Opens the sidebar menu
  */
  private _toggleSidebar() { 
    this._opened = !this._opened;
  }

  /**
  * Tells which div should be shown on init
   */
  showDiv = {
    employees: true
  }

  ngOnInit(): void {
    for (let ts of this.userTimeStamps) {
      if (ts.date_of_work !== formatDate(new Date(), 'yyyy-MM-dd', 'en')) {
        this.toastr.error("Error", "Error");
      } else {
        this.toastr.success("Success", "Success");
      }
    }

    this.managersEmployees.refreshList();
    this.currentManagerId = this.authenticationService.currentUserValue.manager_id;
    this.getEmployeesThatBelongToCurrentManager(this.currentManagerId);
  }

  populateTable(selectedRecord) {
    this.userTimeStamps = [];
    let allTimeTracks = this.timeService.getAll();
    allTimeTracks.forEach(function (value) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].employee_init_id === selectedRecord.id_num) {
          this.userTimeStamps.push(value[i]);
        }
      }
      this.totalTimeWorked = this.calculateTotalTimeWorked();
    }.bind(this));
  }

  getEmployeesThatBelongToCurrentManager(managerId: number) {
    if (managerId != undefined) {
      this.managersEmployees.getAll().subscribe(res => {
        this.managersEmployees.list.forEach(element => {
          if (element.manager_id === managerId) {
            this.managersEmployeesList.push(element);
          }
        });
      });
    }
  }

  /**
  * Calls the logout method and reloads the page
  */
  logoutUser() {
    this.authenticationService.logout();
    window.location.reload();
  }

  /**
   * calculates total hours worked from all records.
   */
  calculateTotalTimeWorked(): number {
    let totalHoursWorked = 0;
    this.userTimeStamps.forEach(date => {
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
  calculateTimeWorkedOfTheDay(date: String, _start: String, _end: String) {
    let d1 = new Date(date.substring(0, 10) + "T" + _start + "Z");
    let d2 = new Date(date.substring(0, 10) + "T" + _end + "Z");
    let _24hinMiliseconds = 86400000;
    if (d1.getTime() > d2.getTime()) {
      let total = (_24hinMiliseconds - d1.getTime()) + d2.getTime();
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    } else {
      let total = d2.getTime() - d1.getTime();
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }

  }
  /**
   * converts miliseconds to hours
   * @param ms when subtracting time it return in miliseconds.
   */
  convertMilisecondsToHours(ms: number): number {
    let hours = ((ms / 1000) / 60) / 60;
    return hours;
  }
  /**
   * Turns hours remainder to minutes
   * @param hours total hours workde in decimals
   * @return minutes that was converted from hours remainder.
   */
  roundHourRemainderToMinutes(hours: number) {
    let wholeHours = Math.floor(hours);
    let remainder = hours - wholeHours;
    let minutes = remainder * 60;
    return Math.floor(minutes);
  }
  /**
   * Formating total hours worked to whole hours and minutes.
   * @param totalTimeInHours total hours worked by employee in total
   */
  formatTotalTimeWorked(totalTimeInHours: number): string {
    let hours = Math.floor(totalTimeInHours);
    let minutes = this.roundHourRemainderToMinutes(totalTimeInHours);
    return hours + "h " + minutes + "m";
  }

  sortTable(sortingType: any){
    if(sortingType.target.value == "id"){
      this.bubbleSort(this.managersEmployeesList, "id_num");
    }else if(sortingType.target.value == "firstName"){
      this.bubbleSort(this.managersEmployeesList, "first_name");
    }else if(sortingType.target.value == "lastName"){
      this.bubbleSort(this.managersEmployeesList, "last_name");
    }else if(sortingType.target.value == "privileges"){
      this.bubbleSort(this.managersEmployeesList, "user_privileges");
    }else if(sortingType.target.value == "managerID"){
      this.bubbleSort(this.managersEmployeesList, "manager_id");
    }

  }

  bubbleSort(data: EmployeeInfo[], variableKey: string): EmployeeInfo[]{
    let sorted = false;
    let storage;
    while(!sorted){
      sorted = true;
        for(let i = 0; i < data.length-1; i++){
          if(data[i][variableKey] > data[i+1][variableKey]){
            sorted = false;
            storage = data[i];
            data[i] = data[i+1];
            data[i+1] = storage;
          }
        }
    }
    return data;
  }
}
