﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { EmployeeInfoService } from '../services/employee-info.service';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    constructor(public employeeService : EmployeeInfoService) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/EmployeeInfo/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/EmployeeInfo') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions
        function authenticate() {
            const { username, password } = body;
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Error: "TypeError: Cannot read property 'service' of undefined"
            const employee = this.employeeService.getAll().find(x => x.username === username && x.password === password);
            if (!employee) return error('Username or password is incorrect');
            return ok({
                id_num: employee.id_num,
                username: employee.username,
                first_name: employee.first_name,
                last_name: employee.last_name
            })
        }

        /** */
        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(this.service.getAll());
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message: 'No idea what is happening' } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
        }
    }
}
export let backendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};