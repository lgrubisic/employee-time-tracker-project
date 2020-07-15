import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {
  private _opened: boolean = false;
  isShow = false;
  isShow2 = false;

  constructor(private logoutService : AuthenticationService) { }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  toggleDisplay2() {
    this.isShow2 = !this.isShow2;
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }

  ngOnInit() {
  }


}
