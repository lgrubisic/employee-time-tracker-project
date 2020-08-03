import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.css']
})
export class ManagersListComponent implements OnInit {

  constructor(public manager: ManagerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.manager.refreshManagers();
  }

  /**
   * When user clicks on a record in table, it populates the form with the data for that selected user
   * @param selectedRecord 
   */
   populateForm(selectedRecord) {
    this.manager.managerFormData = Object.assign({}, selectedRecord);
    this.manager.updating = true;
  }

  /**
   * When clicked on the delete button, admin is prompted if he wants to delete the data or not, if yes, employee is deleted and the list is refreshed
   * @param id_num 
   */
  onDelete(id_num) {
    if (confirm('Are you sure to delete this manager record?')) {
      this.manager.deleteManager(id_num)
        .subscribe(res => {
          this.toastr.info('Successfuly Deleted', 'Manager Successfuly Deleted');
          this.manager.refreshManagers();
        },
          err => { console.log(err); })
    }
  }

}
