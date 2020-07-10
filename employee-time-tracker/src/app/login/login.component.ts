import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emp = "";
  
  constructor(public loginService: LoginService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginService.getAllEmployees();
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.loginService.loginFormData.username === "" || this.loginService.loginFormData.password === "") {
      //toastr here and then reset form
      this.toastr.error('Please fill out both fields to log in.', 'Error');
      this.resetForm();
    } else {
      this.loginUser();
    }
  }

  loginUser() {
    for(let emp of this.loginService.loginList) {
      if(this.loginService.loginFormData.username === emp.username) {
        this.router.navigateByUrl('employees-info/employees-info');
      }
    }
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.loginService.loginFormData = {
      username: '',
      password: '',
    }
  }  

}
