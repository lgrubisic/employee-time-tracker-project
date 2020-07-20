import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../services/time-track.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-user-time-tracking-list',
  templateUrl: './user-time-tracking-list.component.html',
  styleUrls: ['./user-time-tracking-list.component.css']
})
export class UserTimeTrackingListComponent implements OnInit {

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.timeService.getTimesByUser(10);
  }
}