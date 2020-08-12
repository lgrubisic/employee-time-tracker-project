﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeInfoService } from './employee-info.service';
import { ManagerService } from './manager.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentEmployeeSubject: BehaviorSubject<any>;
    public currentEmployee: Observable<any>;


    constructor(private http: HttpClient, public service: EmployeeInfoService, private cookieService: CookieService, private manager: ManagerService) {

        //This if statement checks to see if cookie is empty
        if (this.cookieService.get('currentEmployee') === "") {
            this.cookieService.set('currentEmployee', JSON.stringify(""));
        }

        this.currentEmployeeSubject = new BehaviorSubject<any>(JSON.parse(this.cookieService.get('currentEmployee')));
        this.currentEmployee = this.currentEmployeeSubject.asObservable();
    }

    /**
    * Method to get currently logged user values
     */
    public get currentUserValue(): any {
        return this.currentEmployeeSubject.value;
    }

    /**
     * Method that takes username and password and authenticates them, and if user exists and is valid, sets the values in local storage to keep user logged in until logout
     * @param username 
     * @param password 
     */
    login(username: string, password: string) {
        return this.http.post<any>(`${this.service.rootURL}/EmployeeInfo/authenticate`, { username, password }).pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            this.cookieService.set('currentEmployee', JSON.stringify(user));
            this.currentEmployeeSubject.next(user);
            return user;
        }));
    }


    /**
     * Method that takes username and password and authenticates them, and if user exists and is valid, sets the values in local storage to keep user logged in until logout
     * @param username 
     * @param password 
     */
    loginManager(username: string, password: string) {
        //this code works in returning manager
        return this.http.post<any>(`${this.manager.rootURL}/EmployeeManagers/authenticate`, { username, password }).pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            this.cookieService.set('currentEmployee', JSON.stringify(user));
            this.currentEmployeeSubject.next(user);
            return user;
        }));
    }

    /**
     * Removes data from local storage and logs out user
     */
    logout() {
        // set employee to empty
        this.cookieService.set('currentEmployee', JSON.stringify(""));
        this.currentEmployeeSubject.next(null);
    }
}