import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../services/time-track.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-time-tracking-list',
  templateUrl: './time-tracking-list.component.html',
  styleUrls: ['./time-tracking-list.component.css']
})
export class TimeTrackingListComponent implements OnInit {

  constructor(public timeService: TimeTrackService, private toastr: ToastrService) { }
  /**
   * updating timer list with data from server
   */
  ngOnInit(): void {
    this.timeService.refreshTimeList();
  }
  /**
   * Display timer form data record selected in timer form 
   * @param selectedRecord data of current column user selected
   */
  populateForm(selectedRecord) {
    this.timeService.timeFormData = Object.assign({}, selectedRecord);
  }
  /**
   * remove timer record from list permanently
   * @param timer_id id to find the record to delete.
   */
  onDelete(timer_id) {
    if (confirm('Are you sure to delete this time track record?')) {
      this.timeService.deleteTimeTracking(timer_id)
        .subscribe(res => {
          this.toastr.info('Record with ID: ' + timer_id + ' successfuly deleted.', 'Success');
          this.timeService.refreshTimeList();
        },
        err => { this.toastr.error(err.message, "Error!"); })
    }
  }

}