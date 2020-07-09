import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.loginService.loginFormData.username === "" || this.loginService.loginFormData.password === "") {
      //toastr here and then reset form
    } else {
      //check role and redirect to page
    }
  }

  loginUser() {

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
