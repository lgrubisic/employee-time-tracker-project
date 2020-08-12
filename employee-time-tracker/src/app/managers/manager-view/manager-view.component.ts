import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeInfoService } from '../../services/employee-info.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfo } from '../../models/employee-info.model';
import { AuthenticationService } from '../../services/authentication.service';
import { TimeTrack } from '../../models/time-track.model';
import { TimeTrackService } from '../../services/time-track.service';
import { formatDate, DecimalPipe } from '@angular/common';
import { HelperMethods } from '../../services/helper.service';

@Component({
  selector: 'app-managers',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css'],
  providers: [DecimalPipe]
})
export class ManagerViewComponent implements OnInit {

  private _opened: boolean = false;
  public managersEmployeesList: EmployeeInfo[] = [];
  public currentManagerId: number;
  public userTimeStamps: TimeTrack[] = [];

  constructor(private managersEmployees: EmployeeInfoService, private authenticationService: AuthenticationService, public timeService: TimeTrackService, private toastr: ToastrService, public helper: HelperMethods) {
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
    employees: true,
    checkin: false
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
      totalHoursWorked += this.helper.calculateTimeWorkedOfTheDay(date.date_of_work, date.time_in, date.time_out);
    });
    return parseFloat(totalHoursWorked.toFixed(3));
  }
}
