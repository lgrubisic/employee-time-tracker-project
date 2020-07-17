import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {
  private _opened: boolean = false;

  constructor(private logoutService : AuthenticationService) { }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  showDiv = {
    employees : true,
    timeData : false
    }

  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }

  ngOnInit() {
  }


}
