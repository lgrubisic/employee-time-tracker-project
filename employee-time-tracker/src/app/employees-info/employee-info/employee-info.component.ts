import { EmployeeInfoService } from '../../services/employee-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor(private service: EmployeeInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id_num == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  updateRecord(form: NgForm) {
    this.service.putEmployeeInfo().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Employee Info Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
        //console.log(err.message);
      }
    )
  }

  insertRecord(form: NgForm) {
    this.service.postEmployeeInfo().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { 
        console.log(err); 
        //console.log(err.message);
      }
    )
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id_num: 0,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      user_privileges: ''
    }
  }  
}