import { Component, OnInit } from '@angular/core';
import { TimeTrackService } from '../../shared/time-track.service';


@Component({
  selector: 'app-time-tracking-list',
  templateUrl: './time-tracking-list.component.html',
  styleUrls: ['./time-tracking-list.component.css']
})
export class TimeTrackingListComponent implements OnInit {

  constructor(public timeService: TimeTrackService) { }

  ngOnInit(): void {
    this.timeService.refreshTimeList();
  }

  populateForm(selectedRecord) {
    this.timeService.timeFormData = Object.assign({}, selectedRecord);
  }

  onDelete(timer_id) {
    if (confirm('Are you sure to delete this time track record?')) {
      this.timeService.deleteTimeTracking(timer_id)
        .subscribe(res => {
          this.timeService.refreshTimeList();
        },
        err => { console.log(err.message); })
    }
  }

}