import { Component, OnInit, ViewChild } from '@angular/core';
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
  date = new FormControl(new Date());
  userIdPlaceholder: Number = this.logoutService.currentUserValue.id_num;

  constructor(private logoutService: AuthenticationService, private timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService) { }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  showDiv = {
    timeData: true
  }

  ngOnInit() {
  }

  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }
}