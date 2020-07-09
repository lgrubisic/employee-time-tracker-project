import { EmployeeInfo } from './employee-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from './login.model';
  
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
    loginFormData: Login;
    readonly rootURL = 'http://localhost:5040/api';
    loginList: Login[];

    constructor(private http: HttpClient) { }

    getEmployeeInfo() {
        this.http.get(this.rootURL + '/EmployeeInfo')
        .toPromise()
        .then(res => this.loginList = res as Login[]);
      }
}
