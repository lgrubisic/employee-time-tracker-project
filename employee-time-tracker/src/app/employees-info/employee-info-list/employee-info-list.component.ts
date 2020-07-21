import { EmployeeInfoService } from '../../services/employee-info.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-info-list',
  templateUrl: './employee-info-list.component.html',
  styleUrls: ['./employee-info-list.component.css']
})
export class EmployeeInfoListComponent implements OnInit {

  constructor(public service: EmployeeInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  } 

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

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
