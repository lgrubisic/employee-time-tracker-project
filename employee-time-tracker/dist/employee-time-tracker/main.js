(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-login>\r\n</app-login>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info-list/employee-info-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info-list/employee-info-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-hover\">\r\n    <tr>\r\n        <td>ID</td>\r\n        <td>First Name</td>\r\n        <td>Last Name</td>\r\n        <td>User Privileges</td>\r\n    </tr>\r\n    <tr *ngFor=\"let pd of service.list\">\r\n        <td (click)=\"populateForm(pd)\">{{ pd.id_num }}</td>\r\n        <td (click)=\"populateForm(pd)\">{{ pd.first_name }}</td>\r\n        <td (click)=\"populateForm(pd)\">{{ pd.last_name }}</td>\r\n        <td (click)=\"populateForm(pd)\">{{ pd.user_privileges }}</td>\r\n        <td>\r\n            <i class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(pd.id_num)\"></i>\r\n        </td>\r\n    </tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info/employee-info.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info/employee-info.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n    <input type=\"hidden\" name=\"id_num\" [value]=\"service.formData.id_num\">\r\n    <div class=\"form-group\">\r\n        <!-- First Name Form Input -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text bg-white\">\r\n                    <i class=\"fas fa-user-circle\" [class.green-icon]=\"first_name.valid\" [class.red-icon]=\"first_name.invalid && first_name.touched\"></i>\r\n                </div>\r\n            </div>\r\n            <input name=\"first_name\" #first_name=\"ngModel\" [(ngModel)]=\"service.formData.first_name\" class=\"form-control\" placeholder=\"First Name\" required>\r\n        </div>\r\n        <!-- Last Name Form Input -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text bg-white\">\r\n                    <i class=\"fas fa-user-circle\" [class.green-icon]=\"last_name.valid\" [class.red-icon]=\"last_name.invalid && last_name.touched\"></i>\r\n                </div>\r\n            </div>\r\n            <input name=\"last_name\" #last_name=\"ngModel\" [(ngModel)]=\"service.formData.last_name\" class=\"form-control\" placeholder=\"Last Name\" required>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <!-- User Privileges Form Input -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text bg-white\">\r\n                    <!-- **Find icon here** -->\r\n                    <i class=\"fas fa-user-shield\" [class.green-icon]=\"user_privileges.valid\" [class.red-icon]=\"user_privileges.invalid && user_privileges.touched\"></i>\r\n                </div>\r\n            </div>\r\n            <input name=\"user_privileges\" #user_privileges=\"ngModel\" [(ngModel)]=\"service.formData.user_privileges\" class=\"form-control\" placeholder=\"User Privileges (Admin or User)\" pattern=\"(?:Admin|User)\" required maxlength=\"5\" minlength=\"4\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-7\">\r\n            <!-- Username Form Input -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                        <!-- **Find icon here** -->\r\n                        <i class=\"far fa-user\" [class.green-icon]=\"username.valid\" [class.red-icon]=\"username.invalid && username.touched\"></i>\r\n                    </div>\r\n                </div>\r\n                <input name=\"username\" #username=\"ngModel\" [(ngModel)]=\"service.formData.username\" class=\"form-control\" placeholder=\"Username\" required>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-md-5\">\r\n            <!-- Password Form Input -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                        <i class=\"fas fa-key\" [class.green-icon]=\"password.valid\" [class.red-icon]=\"password.invalid && password.touched\"></i>\r\n                    </div>\r\n                </div>\r\n                <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"service.formData.password\" class=\"form-control\" placeholder=\"Password\" required>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employees-info.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employees-info.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbtron\">\r\n    <h1 class=\"display-4 text-center\">Employees</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <app-employee-info></app-employee-info>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n            <app-employee-info-list></app-employee-info-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"jumbtron\">\r\n    <h1 class=\"display-4 text-center\">Time Tracking</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <app-time-tracking>\r\n            </app-time-tracking>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n            <app-time-tracking-list>\r\n            </app-time-tracking-list>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n    <div class=\"alert alert-info\">\r\n        <tr *ngFor=\"let emp of loginService.loginList\">\r\n            <td>{{ emp.username }}</td>\r\n        </tr>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h4 class=\"card-header\">Employee Tracker</h4>\r\n        <div class=\"card-body\">\r\n            <form #loginForm=\"ngForm\" [formGroup]=\"loginForm\" autocomplete=\"off\" (submit)=\"onSubmit(loginForm)\">\r\n                <!--Username-->\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input name=\"username\" #username=\"ngModel\" formControlName=\"username\" [(ngModel)]=\"loginService.loginFormData.username\" [ngClass]=\"{ 'is-invalid': submitted && formInput.username.errors }\" class=\"form-control\" placeholder=\"Username\" required>\r\n                    <div *ngIf=\"submitted && formInput.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"formInput.username.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <!--Password-->\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" name=\"password\" #password=\"ngModel\" formControlName=\"password\" [(ngModel)]=\"loginService.loginFormData.password\" [ngClass]=\"{ 'is-invalid': submitted && formInput.password.errors }\" class=\"form-control\" placeholder=\"Password\" required>\r\n                    <div *ngIf=\"submitted && formInput.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"formInput.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <button [disabled]=\"loading\" routerLink=\"employees-info/employees-info\" routerLinkActive=\"active\" class=\"btn btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Login\r\n                </button>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking-list/time-tracking-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking-list/time-tracking-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-hover\">\r\n    <tr>\r\n        <td>Timer ID</td>\r\n        <td>Date</td>\r\n        <td>Start Time</td>\r\n        <td>End Time</td>\r\n        <td>Employee ID</td>\r\n    </tr>\r\n    <tr *ngFor=\"let ts of timeService.timeList\">\r\n        <td (click)=\"populateForm(ts)\">{{ ts.timer_id }}</td>\r\n        <td (click)=\"populateForm(ts)\">{{ ts.date_of_work }}</td>\r\n        <td (click)=\"populateForm(ts)\">{{ ts.time_in }}</td>\r\n        <td (click)=\"populateForm(ts)\">{{ ts.time_out }}</td>\r\n        <td (click)=\"populateForm(ts)\">{{ ts.employee_init_id }}</td>\r\n        <td>\r\n            <i class=\"far fa-trash-alt fa-lg text-danger\" (click)=\"onDelete(ts.timer_id)\"></i>\r\n        </td>\r\n    </tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n    <input type=\"hidden\" name=\"timer_id\" [value]=\"timeService.timeFormData.timer_id\">\r\n    <div class=\"form-group\">\r\n\r\n        <!-- employee_init_id Form Input -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text bg-white\">\r\n                    <i class=\"far fa-calendar-alt\" [class.green-icon]=\"employee_init_id.valid\" [class.red-icon]=\"employee_init_id.invalid && employee_init_id.touched\"></i>\r\n                </div>\r\n            </div>\r\n            <select name=\"employee_init_id\" #employee_init_id=\"ngModel\" [(ngModel)]=\"timeService.timeFormData.employee_init_id\" class=\"form-control\" required>\r\n                <option [ngValue]=\"null\" [disabled]=\"true\" >Choose employee ID</option>\r\n                <option *ngFor=\"let pd of service.list\" value=\"{{ pd.id_num }}\">{{ pd.id_num }}</option>\r\n            </select>\r\n        </div>\r\n        <!-- date_of_work Form Input -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text bg-white\">\r\n                    <i class=\"far fa-calendar-alt\" [class.green-icon]=\"date_of_work.valid\" [class.red-icon]=\"date_of_work.invalid && date_of_work.touched\"></i>\r\n                </div>\r\n            </div>\r\n            <input name=\"date_of_work\" #date_of_work=\"ngModel\" [(ngModel)]=\"timeService.timeFormData.date_of_work\" class=\"form-control\" placeholder=\"YYYY-MM-DD\" required>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    </div>\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-7\">\r\n            <!-- time_in Form Input -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                        <!-- **Find icon here** -->\r\n                        <i class=\"far fa-clock\" [class.green-icon]=\"time_in.valid\" [class.red-icon]=\"time_in.invalid && time_in.touched\"></i>\r\n                    </div>\r\n                </div>\r\n                <input name=\"time_in\" #time_in=\"ngModel\" [(ngModel)]=\"timeService.timeFormData.time_in\" class=\"form-control\" placeholder=\"Employee Start Time\" required>\r\n            </div>\r\n            <!-- time_out Form Input -->\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                        <!-- **Find icon here** -->\r\n                        <i class=\"far fa-clock\" [class.green-icon]=\"time_out.valid\" [class.red-icon]=\"time_out.invalid && time_out.touched\"></i>\r\n                    </div>\r\n                </div>\r\n                <input name=\"time_out\" #time_out=\"ngModel\" [(ngModel)]=\"timeService.timeFormData.time_out\" class=\"form-control\" placeholder=\"Employee End Time\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"form.invalid\"><i class=\"fas fa-database\"></i> Submit</button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user works!</p>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentEmployee.subscribe(function (x) { return _this.currentEmployee = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employees_info_employees_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees-info/employees-info.component */ "./src/app/employees-info/employees-info.component.ts");
/* harmony import */ var _employees_info_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees-info/employee-info/employee-info.component */ "./src/app/employees-info/employee-info/employee-info.component.ts");
/* harmony import */ var _employees_info_employee_info_list_employee_info_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees-info/employee-info-list/employee-info-list.component */ "./src/app/employees-info/employee-info-list/employee-info-list.component.ts");
/* harmony import */ var _services_employee_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/employee-info.service */ "./src/app/services/employee-info.service.ts");
/* harmony import */ var _services_time_track_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/time-track.service */ "./src/app/services/time-track.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _time_tracking_time_tracking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./time-tracking/time-tracking.component */ "./src/app/time-tracking/time-tracking.component.ts");
/* harmony import */ var _time_tracking_time_tracking_list_time_tracking_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./time-tracking/time-tracking-list/time-tracking-list.component */ "./src/app/time-tracking/time-tracking-list/time-tracking-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/auth.interceptor */ "./src/app/helpers/auth.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _employees_info_employees_info_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesInfoComponent"],
                _employees_info_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeInfoComponent"],
                _employees_info_employee_info_list_employee_info_list_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeInfoListComponent"],
                _time_tracking_time_tracking_component__WEBPACK_IMPORTED_MODULE_15__["TimeTrackingComponent"],
                _time_tracking_time_tracking_list_time_tracking_list_component__WEBPACK_IMPORTED_MODULE_16__["TimeTrackingListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_13__["appRoutingModule"]
            ],
            providers: [_services_employee_info_service__WEBPACK_IMPORTED_MODULE_8__["EmployeeInfoService"], _services_time_track_service__WEBPACK_IMPORTED_MODULE_9__["TimeTrackService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"], multi: true }, { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"], multi: true },],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employees_info_employees_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-info/employees-info.component */ "./src/app/employees-info/employees-info.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");




var routes = [
    { path: '', component: _employees_info_employees_info_component__WEBPACK_IMPORTED_MODULE_1__["EmployeesInfoComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/employees-info/employee-info-list/employee-info-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/employees-info/employee-info-list/employee-info-list.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy1pbmZvL2VtcGxveWVlLWluZm8tbGlzdC9lbXBsb3llZS1pbmZvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employees-info/employee-info-list/employee-info-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employees-info/employee-info-list/employee-info-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeInfoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInfoListComponent", function() { return EmployeeInfoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee-info.service */ "./src/app/services/employee-info.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




var EmployeeInfoListComponent = /** @class */ (function () {
    function EmployeeInfoListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    EmployeeInfoListComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
    };
    EmployeeInfoListComponent.prototype.populateForm = function (selectedRecord) {
        this.service.formData = Object.assign({}, selectedRecord);
    };
    EmployeeInfoListComponent.prototype.onDelete = function (id_num) {
        var _this = this;
        if (confirm('Are you sure to delete this employee record?')) {
            this.service.deleteEmployeeInfo(id_num)
                .subscribe(function (res) {
                _this.toastr.info('Successfuly Deleted', 'Employee Successfuly Deleted');
                _this.service.refreshList();
            }, function (err) { console.log(err); });
        }
    };
    EmployeeInfoListComponent.ctorParameters = function () { return [
        { type: _services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInfoService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    EmployeeInfoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employee-info-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-info-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info-list/employee-info-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-info-list.component.css */ "./src/app/employees-info/employee-info-list/employee-info-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInfoService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EmployeeInfoListComponent);
    return EmployeeInfoListComponent;
}());



/***/ }),

/***/ "./src/app/employees-info/employee-info/employee-info.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employees-info/employee-info/employee-info.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy1pbmZvL2VtcGxveWVlLWluZm8vZW1wbG95ZWUtaW5mby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employees-info/employee-info/employee-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employees-info/employee-info/employee-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInfoComponent", function() { return EmployeeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee-info.service */ "./src/app/services/employee-info.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




var EmployeeInfoComponent = /** @class */ (function () {
    function EmployeeInfoComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    EmployeeInfoComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeInfoComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.id_num == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    EmployeeInfoComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.putEmployeeInfo().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info('Submitted successfully', 'Employee Info Register');
            _this.service.refreshList();
        }, function (err) {
            console.log(err);
            //console.log(err.message);
        });
    };
    EmployeeInfoComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postEmployeeInfo().subscribe(function (res) {
            _this.resetForm(form);
            _this.service.refreshList();
        }, function (err) {
            console.log(err);
            //console.log(err.message);
        });
    };
    EmployeeInfoComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.form.reset();
        this.service.formData = {
            id_num: 0,
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            user_privileges: ''
        };
    };
    EmployeeInfoComponent.ctorParameters = function () { return [
        { type: _services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInfoService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    EmployeeInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employee-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employee-info/employee-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-info.component.css */ "./src/app/employees-info/employee-info/employee-info.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_employee_info_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInfoService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EmployeeInfoComponent);
    return EmployeeInfoComponent;
}());



/***/ }),

/***/ "./src/app/employees-info/employees-info.component.css":
/*!*************************************************************!*\
  !*** ./src/app/employees-info/employees-info.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy1pbmZvL2VtcGxveWVlcy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/employees-info/employees-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employees-info/employees-info.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeesInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesInfoComponent", function() { return EmployeesInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var EmployeesInfoComponent = /** @class */ (function () {
    function EmployeesInfoComponent() {
    }
    EmployeesInfoComponent.prototype.ngOnInit = function () {
    };
    EmployeesInfoComponent.ctorParameters = function () { return []; };
    EmployeesInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employees-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees-info/employees-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employees-info.component.css */ "./src/app/employees-info/employees-info.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmployeesInfoComponent);
    return EmployeesInfoComponent;
}());



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/auth.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + currentUser.authdata
                }
            });
        }
        return next.handle(request);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, formBuilder, route, router, authenticationService) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "formInput", {
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.formInput.username.value, this.formInput.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _employee_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-info.service */ "./src/app/services/employee-info.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, service) {
        this.http = http;
        this.service = service;
        this.currentEmployeeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentEmployee')));
        this.currentEmployee = this.currentEmployeeSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentEmployeeSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.service.rootURL + "/EmployeeInfo/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('currentEmployee', JSON.stringify(user));
            _this.currentEmployeeSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentEmployee');
        this.currentEmployeeSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _employee_info_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeInfoService"] }
    ]; };
    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _employee_info_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeInfoService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/employee-info.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/employee-info.service.ts ***!
  \***************************************************/
/*! exports provided: EmployeeInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInfoService", function() { return EmployeeInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



var EmployeeInfoService = /** @class */ (function () {
    function EmployeeInfoService(http) {
        this.http = http;
        this.rootURL = 'http://localhost:5040/api';
    }
    EmployeeInfoService.prototype.getAll = function () {
        return this.http.get(this.rootURL + '/EmployeeInfo');
    };
    EmployeeInfoService.prototype.postEmployeeInfo = function () {
        return this.http.post(this.rootURL + '/EmployeeInfo', this.formData);
    };
    EmployeeInfoService.prototype.putEmployeeInfo = function () {
        return this.http.put(this.rootURL + '/EmployeeInfo/' + this.formData.id_num, this.formData);
    };
    EmployeeInfoService.prototype.deleteEmployeeInfo = function (id) {
        return this.http.delete(this.rootURL + '/EmployeeInfo/' + id);
    };
    EmployeeInfoService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/EmployeeInfo')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    EmployeeInfoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmployeeInfoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeInfoService);
    return EmployeeInfoService;
}());



/***/ }),

/***/ "./src/app/services/time-track.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/time-track.service.ts ***!
  \************************************************/
/*! exports provided: TimeTrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackService", function() { return TimeTrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



var TimeTrackService = /** @class */ (function () {
    function TimeTrackService(http) {
        this.http = http;
        this.rootURL = 'http://localhost:5040/api';
    }
    TimeTrackService.prototype.postTimeTracking = function () {
        return this.http.post(this.rootURL + '/TimeTracking', this.timeFormData);
    };
    TimeTrackService.prototype.putTimeTracking = function () {
        return this.http.put(this.rootURL + '/TimeTracking/' + this.timeFormData.timer_id, this.timeFormData);
    };
    TimeTrackService.prototype.deleteTimeTracking = function (time_id) {
        return this.http.delete(this.rootURL + '/TimeTracking/' + time_id);
    };
    TimeTrackService.prototype.refreshTimeList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/TimeTracking')
            .toPromise()
            .then(function (res) { return _this.timeList = res; });
    };
    TimeTrackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimeTrackService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimeTrackService);
    return TimeTrackService;
}());



/***/ }),

/***/ "./src/app/time-tracking/time-tracking-list/time-tracking-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/time-tracking/time-tracking-list/time-tracking-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWUtdHJhY2tpbmcvdGltZS10cmFja2luZy1saXN0L3RpbWUtdHJhY2tpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/time-tracking/time-tracking-list/time-tracking-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/time-tracking/time-tracking-list/time-tracking-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TimeTrackingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackingListComponent", function() { return TimeTrackingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_time_track_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/time-track.service */ "./src/app/services/time-track.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




var TimeTrackingListComponent = /** @class */ (function () {
    function TimeTrackingListComponent(timeService, toastr) {
        this.timeService = timeService;
        this.toastr = toastr;
    }
    TimeTrackingListComponent.prototype.ngOnInit = function () {
        this.timeService.refreshTimeList();
    };
    TimeTrackingListComponent.prototype.populateForm = function (selectedRecord) {
        this.timeService.timeFormData = Object.assign({}, selectedRecord);
    };
    TimeTrackingListComponent.prototype.onDelete = function (timer_id) {
        var _this = this;
        if (confirm('Are you sure to delete this time track record?')) {
            this.timeService.deleteTimeTracking(timer_id)
                .subscribe(function (res) {
                _this.toastr.info('Record with ID: ' + timer_id + ' successfuly deleted.', 'Success');
                _this.timeService.refreshTimeList();
            }, function (err) { console.log(err.message); });
        }
    };
    TimeTrackingListComponent.ctorParameters = function () { return [
        { type: _services_time_track_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    TimeTrackingListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-tracking-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./time-tracking-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking-list/time-tracking-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./time-tracking-list.component.css */ "./src/app/time-tracking/time-tracking-list/time-tracking-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_time_track_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TimeTrackingListComponent);
    return TimeTrackingListComponent;
}());



/***/ }),

/***/ "./src/app/time-tracking/time-tracking.component.css":
/*!***********************************************************!*\
  !*** ./src/app/time-tracking/time-tracking.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWUtdHJhY2tpbmcvdGltZS10cmFja2luZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/time-tracking/time-tracking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/time-tracking/time-tracking.component.ts ***!
  \**********************************************************/
/*! exports provided: TimeTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackingComponent", function() { return TimeTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_time_track_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/time-track.service */ "./src/app/services/time-track.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_employee_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/employee-info.service */ "./src/app/services/employee-info.service.ts");







var TimeTrackingComponent = /** @class */ (function () {
    function TimeTrackingComponent(timeService, toastr, service) {
        this.timeService = timeService;
        this.toastr = toastr;
        this.service = service;
        this.today = new Date();
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
    }
    TimeTrackingComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    TimeTrackingComponent.prototype.onSubmit = function (form) {
        if (this.timeService.timeFormData.timer_id == 0) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
        this.resetForm();
    };
    TimeTrackingComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.timeService.putTimeTracking().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info('Submitted successfully', 'Time Tracking Register');
            _this.timeService.refreshTimeList();
        }, function (err) {
            //console.log(err);
            console.log(err.message);
        });
    };
    TimeTrackingComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.timeService.postTimeTracking().subscribe(function (res) {
            _this.resetForm(form);
            _this.timeService.refreshTimeList();
        }, function (err) {
            _this.toastr.error('User ID is not correct, please enter a valid one.', 'Error');
        });
    };
    TimeTrackingComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.form.reset();
        this.timeService.timeFormData = {
            timer_id: 0,
            employee_init_id: 0,
            date_of_work: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en'),
            time_in: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'HH:mm:ss', 'en-US'),
            time_out: Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'HH:mm:ss', 'en-US', '+1000'),
        };
    };
    TimeTrackingComponent.ctorParameters = function () { return [
        { type: _services_time_track_service__WEBPACK_IMPORTED_MODULE_4__["TimeTrackService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _services_employee_info_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeInfoService"] }
    ]; };
    TimeTrackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-tracking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./time-tracking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/time-tracking/time-tracking.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./time-tracking.component.css */ "./src/app/time-tracking/time-tracking.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_time_track_service__WEBPACK_IMPORTED_MODULE_4__["TimeTrackService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_employee_info_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeInfoService"]])
    ], TimeTrackingComponent);
    return TimeTrackingComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.ctorParameters = function () { return []; };
    UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5040'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lgrubisic\Documents\projects\employee-time-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map