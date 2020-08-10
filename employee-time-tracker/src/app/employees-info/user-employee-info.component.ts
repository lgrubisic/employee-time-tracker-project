import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TimeTrackService } from '../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfoService } from '../services/employee-info.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-employee-info',
  templateUrl: './user-employee-info.component.html',
  styleUrls: ['./user-employee-info.component.css']
})
export class UserEmployeeInfoComponent implements OnInit {
  private _opened: boolean = false;
  today = new Date();
  date = new FormControl(new Date());
  userIdPlaceholder: Number = this.logoutService.currentUserValue.id_num;

  constructor(private logoutService: AuthenticationService, private timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService) { }

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
    timeData: true
  }

  ngOnInit() {
  }

  /**
   * Calls the logoutService method and reloads the page
   */
  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }
}