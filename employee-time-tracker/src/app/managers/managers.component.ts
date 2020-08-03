import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { EmployeeInfoService } from '../services/employee-info.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfo } from '../models/employee-info.model';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  public managersEmployeesList: EmployeeInfo[] = [];
  public currentManagerId: number;


  constructor(private managersEmployees: EmployeeInfoService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.managersEmployees.refreshList();
    this.currentManagerId = this.authenticationService.currentUserValue.manager_id;
    this.getEmployeesThatBelongToCurrentManager(this.currentManagerId);
  } 

  getEmployeesThatBelongToCurrentManager(managerId: number){
    if(managerId != undefined){
     this.managersEmployees.getAll().subscribe(res => {
      this.managersEmployees.list.forEach(element => {
       if(element.manager_id === managerId){
         this.managersEmployeesList.push(element);
       }
      });
     });
    }
  }

  
}
