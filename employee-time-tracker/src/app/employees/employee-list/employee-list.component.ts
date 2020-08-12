import { EmployeeInfoService } from '../../services/employee-info.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HelperMethods } from '../../services/helper.service';

@Component({
  selector: 'app-employee-info-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeInfoService, private toastr: ToastrService, public helper: HelperMethods) { }

  /**
   * On page load, populates the list of users
   */ 
  ngOnInit() {
    this.service.refreshList(); 
  }

  /**
   * When user clicks on a record in table, it populates the form with the data for that selected user
   * @param selectedRecord 
   */
  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.service.updating = true;
  }

  /**
   * When clicked on the delete button, admin is prompted if he wants to delete the data or not, if yes, employee is deleted and the list is refreshed
   * @param id_num 
   */
  onDelete(id_num) {
    if (confirm('Are you sure to delete this employee record?')) {
      this.service.deleteEmployeeInfo(id_num)
        .subscribe(res => {
          this.toastr.info('Successfuly Deleted', 'Employee Successfuly Deleted');
          this.service.refreshList();
        },
          err => { console.log(err); })
    }
  }

}
