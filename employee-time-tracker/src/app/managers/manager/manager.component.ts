import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  hide = true;
  visibleEye: string = "<i class='far fa-eye-slash'></i>";
  invisibleEye: string = "<i class='far fa-eye'></i>";
  public usernames: String[] = [];

  constructor(private manager: ManagerService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    this.manager.refreshManagers();
    this.manager.getAll().subscribe(res => {
      this.manager.managerList.forEach(element => {
        this.usernames.push(element.username);
      });
    });
  }

  /**
   * On form submit, checks whether the ID exists in the DB, if it does, it updates the form, if not, inserts new record
   * @param form 
   */
   onSubmit(form: NgForm) {
    if (this.manager.managerFormData.manager_id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
      this.manager.updating = false;
  }

  /**
   * On update, inserts the updated data in the DB, refreshes the list and alerts that the record has been updated
   * @param form 
   */
   updateRecord(form: NgForm) {
    this.manager.putManager().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Manager Register');
        this.manager.refreshManagers();
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
    this.manager.postManager().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Inserted successfully', 'Manager Register');
        this.manager.refreshManagers();
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
    this.manager.managerFormData = {
      manager_id: 0,
      username: '',
      password: '',
      first_name: '',
      last_name: ''
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
