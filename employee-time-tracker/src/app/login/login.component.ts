import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';  
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeInfoService } from '../services/employee-info.service';
import 'rxjs/add/operator/catch';
import { EmployeesInfoComponent } from '../employees-info/employees-info.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  visibleEye:  string = "<i class='far fa-eye-slash'></i>";
  invisibleEye: string = "<i class='far fa-eye'></i>";
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    userUrl: string;
    error = '';
    errStr = '';
  
  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, 
    private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private http: HttpClient, public service: EmployeeInfoService) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formInput() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
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
                    if(privilege === "User") {
                      console.log("Regular User");
                        this.router.navigate(['user']);
                    } else if(privilege === "Admin"){
                      console.log("Superuser");
                      this.router.navigate(['']);
                      console.log(this.route);
                    }
              });   
            },
            error => {
              this.error = error;
<<<<<<< HEAD
              console.log(error);
              this.error = error.error.message;//returns specification error back to user
              this.loginForm.reset();//resets log in form inputs
=======
              this.toastr.error(error.error.message, "Error!");
              this.loginForm.reset();
>>>>>>> working
              this.loading = false;
            });
  }
}
