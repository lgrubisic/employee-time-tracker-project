import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
