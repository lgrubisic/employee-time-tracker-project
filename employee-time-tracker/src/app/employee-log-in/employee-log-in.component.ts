import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-log-in',
  templateUrl: './employee-log-in.component.html',
  styleUrls: ['./employee-log-in.component.css']
})
export class EmployeeLogInComponent implements OnInit {
  @ViewChild('logInForm') logValues;
  constructor() {}

  ngOnInit(): void {
  }

  isFormInputValid(form: NgForm): boolean{
    //method executes read method to see if employee input is valid
    return false;
  }
  
  onSubmit(form: NgForm){
    if(this.isFormInputValid(form)){
        //if form valid input code for next event
    }else{
      this.clearInputLogFields();
    }
  }

  clearInputLogFields(){
    this.logValues.resetForm();
  }

}
