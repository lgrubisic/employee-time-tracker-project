import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmployeeInfoService } from '../services/employee-info.service';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  visibleEye: string = "<i class='far fa-eye-slash'></i>";
  invisibleEye: string = "<i class='far fa-eye'></i>";
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  userUrl: string;
  error = '';
  errStr = '';

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private http: HttpClient, public service: EmployeeInfoService, private cookieService: CookieService, private manager: ManagerService) {
  }

  /**
   * On init, if either of the fields is empty, throws error
   */
  ngOnInit() {
    this.cookieService.set('currentEmployee', JSON.stringify(""));
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  ngAfterViewInit() {
    this.cookieService.set('currentEmployee', JSON.stringify(""));
  }

  /**
   * Gets the inputs from the form
   */
  get formInput() {
    return this.loginForm.controls;
  }

  /**
   * If the data is valid, proceed, if data is invalid, stop login
   * Checks if the user is a regular user, or an admin, and redirects to the proper page using Angular Routing
   * Calls authentication service to check user credentials
   */
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.formInput.username.value, this.formInput.password.value)
      .pipe(first())
      .subscribe(
        data => {
          let currUser = this.service.getEmployeeById(this.authenticationService.currentUserValue.id_num);
          currUser.subscribe(res => {
            let privilege = res["user_privileges"];
            if (privilege === "User") {
              console.log("Regular User");
              this.router.navigate(['user']);
            } else if (privilege === "Admin") {
              console.log("Superuser");
              this.router.navigate(['admin']);
              console.log(this.route);
            }
          });
        },
        error => {
          console.log("2nd error")
          this.error = error;
          this.toastr.error(error.error.message, "Error!");
          this.loginForm.reset();
          this.loading = false;

        });
  }
}


/*
this.authenticationService.loginManager(this.formInput.username.value, this.formInput.password.value)
      .pipe(first())
      .subscribe(
        data => {
          let currUser = this.manager.getEmployeeManager(this.authenticationService.currentUserValue.manager_id);
          currUser.subscribe(res => {
              this.router.navigate(['manager']);

          });
        },
        error => {
            this.error = error;
            this.toastr.error(error.error.message, "Error!");
            this.loginForm.reset();
            this.loading = false;
        });
  }
*/
