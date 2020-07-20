import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmployeeInfo } from 'src/app/models/employee-info.model';
import { TimeTrack } from 'src/app/models/time-track.model';

@Component({
  selector: 'app-user-time-tracking-list',
  templateUrl: './user-time-tracking-list.component.html',
  styleUrls: ['./user-time-tracking-list.component.css']
})
export class UserTimeTrackingListComponent implements OnInit {

  public currentUserTimeStamps: TimeTrack[];

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, private authenticationService: AuthenticationService) { 

  }

  ngOnInit(): void {
    //this.timeService.refreshTimeList();
    this.getCurrentUserTimeTrack()
  }

  getCurrentUserTimeTrack(): void{

    let allTimeTracks = this.timeService.getAll();
    allTimeTracks.forEach(function (value){
      for(let i = 0; i < value.length; i++){
        if(value[i].employee_init_id === this.authenticationService.currentUserValue.id_num){
          this.currentUserTimeStamps.add(value[i]);
        }
      }
    });

  }
  
}