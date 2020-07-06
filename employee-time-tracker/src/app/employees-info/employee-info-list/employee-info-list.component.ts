import { EmployeeInfoService } from './../../shared/employee-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info-list',
  templateUrl: './employee-info-list.component.html',
  styleUrls: ['./employee-info-list.component.css']
})
export class EmployeeInfoListComponent implements OnInit {

  constructor(public service: EmployeeInfoService) { }

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
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
}
