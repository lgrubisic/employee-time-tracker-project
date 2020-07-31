import { Component } from '@angular/core';
import { EmployeeInfo } from './models/employee-info.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentEmployee: EmployeeInfo;

  constructor(private router: Router, private authenticationService: AuthenticationService, private cookieService: CookieService) {
    this.authenticationService.currentEmployee.subscribe(x => this.currentEmployee = x);
  }

  ngOnInit() {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
