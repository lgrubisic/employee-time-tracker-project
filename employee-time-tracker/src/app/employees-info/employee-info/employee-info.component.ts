import { EmployeeInfoService } from '../../services/employee-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  hide = true;
  visibleEye: string = "<i class='far fa-eye-slash'></i>";
  invisibleEye: string = "<i class='far fa-eye'></i>";
  public usernames: String[] = [];

  constructor(private service: EmployeeInfoService, private toastr: ToastrService, private manager: ManagerService) { }

  /**
   * On page load, resets the input form and refreshes the list of currently registered users
   */
  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
    this.manager.refreshManagers();
    this.service.getAll().subscribe(res => {
      this.service.list.forEach(element => {
        this.usernames.push(element.username); 
      });
    });
  }

  /**
   * On form submit, checks whether the ID exists in the DB, if it does, it updates the form, if not, inserts new record
   * @param form 
   */
  onSubmit(form: NgForm) {
    if (this.service.formData.id_num == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
      this.service.updating = false;
  }

  /**
   * On update, inserts the updated data in the DB, refreshes the list and alerts that the record has been updated
   * @param form 
   */
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

  /**
   * Inserts the data from the form in the DB, refreshes the list and alerts that the user has been inserted successfully
   * @param form 
   */
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

  /**
   * Resets the form to empty strings
   * @param form 
   */
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id_num: 0,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      manager_id: 0,
      user_privileges: ''
    }
  }

  /**
   * Checks if username is unique when inserting a new user
   * @param usernames 
   * @param newUsername 
   */
  isNewUsernameUnique(usernames: String[], newUsername: String): boolean {
    let isUnique = true;
    usernames.forEach(element => {
      if (element === newUsername) {
        isUnique = false;
      }
    }); 
    if (isUnique) {
      return true;
    }
  }

}