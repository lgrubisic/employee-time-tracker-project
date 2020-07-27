﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { EmployeeInfoService } from '../services/employee-info.service';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

    constructor(public employeeService: EmployeeInfoService) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(dematerialize());

        /**
         * Handles the routes for the users that are logging in
         */
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

        /**
         * Method that gets the usernames from the employeeService and checks that the password for the selected username is correct
         * Throws error if not correct
         */
        function authenticate() {
            const { username, password } = body;
            const employee = this.employeeService.getAll().find(x => x.username === username && x.password === password);
            if (!employee) return error('Username or password is incorrect');
            return ok({
                id_num: employee.id_num,
                username: employee.username,
                first_name: employee.first_name,
                last_name: employee.last_name
            })
        }

        /**
         * Returns all users
         */
        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(this.service.getAll());
        }

        /**
         * If the request is valid, returns the body
         * @param body 
         */
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        /**
         * If the request is invalid, throws error
         * @param message 
         */
        function error(message) {
            return throwError({ error: { message } });
        }

        /**
         * If the user is not authorized, an error message is thrown
         */
        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Not authorized to view this page.' } });
        }

        /**
         * Checks whether the user is logged in or not
         */
        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
        }
    }
}
