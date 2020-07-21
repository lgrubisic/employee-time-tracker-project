import { EmployeeInfoService } from '../../services/employee-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
}) 
export class EmployeeInfoComponent implements OnInit {
  hide = true;
  visibleEye:  string = "<i class='far fa-eye-slash'></i>";
  invisibleEye: string = "<i class='far fa-eye'></i>";
  public usernames: String[] = [];

  constructor(private service: EmployeeInfoService, private toastr: ToastrService) { }

   ngOnInit() {
    this.resetForm(); 
    this.service.refreshList();
    this.service.getAll().subscribe(res => {
      this.service.list.forEach(element => {
        this.usernames.push(element.username);
      });
    });
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
        this.toastr.info('Updated successfully', 'Employee Info Register');
        this.service.refreshList();
      },
      err => {
        this.toastr.error(err.message, "Error!");
      }
    )
  }

  insertRecord(form: NgForm) {
    this.service.postEmployeeInfo().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Inserted successfully', 'Employee Info Register');
        this.service.refreshList();
      },
      err => { 
        this.toastr.error(err.message, "Error!");
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

  isNewUsernameUnique(usernames: String[], newUsername: String): boolean{
    let isUnique =  true;
    usernames.forEach(element => {
      if(element === newUsername){
        isUnique = false;
      }
    });
    if(isUnique){
      return true;
    }
  }
}