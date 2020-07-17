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
    error = '';
    errStr = '';
  
  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, 
    private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private http: HttpClient, public service: EmployeeInfoService) { 
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
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
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.errStr = JSON.parse(JSON.stringify(error.error.message));
                this.toastr.error(this.errStr);
                this.loading = false;
            });
  }
}
