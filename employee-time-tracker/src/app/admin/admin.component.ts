import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private _opened: boolean = false;

  constructor(private logoutService: AuthenticationService) { }

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
    timeData: false,
    managers: false
  }

  /**
   * Calls the logoutService method and reloads the page
   */
  logoutUser() {
    this.logoutService.logout();
    window.location.reload();
  }

  ngOnInit() {
  }
}
