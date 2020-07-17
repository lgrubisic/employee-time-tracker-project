﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmployeeInfo } from '../models/employee-info.model';
import { EmployeeInfoService } from './employee-info.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentEmployeeSubject: BehaviorSubject<EmployeeInfo>;
    public currentEmployee: Observable<EmployeeInfo>;

    constructor(private http: HttpClient, public service: EmployeeInfoService) {
        this.currentEmployeeSubject = new BehaviorSubject<EmployeeInfo>(JSON.parse(localStorage.getItem('currentEmployee')));
        this.currentEmployee = this.currentEmployeeSubject.asObservable();
    }

    public get currentUserValue(): EmployeeInfo {
        return this.currentEmployeeSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.service.rootURL}/EmployeeInfo/authenticate`, { username, password }).pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentEmployee', JSON.stringify(user));
                this.currentEmployeeSubject.next(user);
                return user;                
            }));
            
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentEmployee');
        this.currentEmployeeSubject.next(null);
    }
}