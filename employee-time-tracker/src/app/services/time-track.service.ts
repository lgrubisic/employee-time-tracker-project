import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TimeTrack } from '../models/time-track.model';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackService {
  timeFormData: TimeTrack;
  readonly rootURL = 'http://localhost:5050/api';
  timeList: TimeTrack[];

  constructor(private http: HttpClient) { }
  
  postTimeTracking() {
    return this.http.post(this.rootURL + '/TimeTracking', this.timeFormData);
  }
  putTimeTracking() {
    return this.http.put(this.rootURL + '/TimeTracking/'+ this.timeFormData.timer_id, this.timeFormData);
  }
  deleteTimeTracking(time_id) {
    return this.http.delete(this.rootURL + '/TimeTracking/'+ time_id);
  }

  getTimesByUser(user_id) {
    //this.http.get(this.rootURL + '/TimeTracking/' + user_id).toPromise().then(res => this.timeList = res as TimeTrack[]);

    this.http.get(this.rootURL + '/TimeTracking/' + user_id)
      .subscribe( res => {
        console.log(res);
        this.timeList = res as TimeTrack[]
      });
  }

  refreshTimeList(){
    this.http.get(this.rootURL + '/TimeTracking').toPromise().then(res => this.timeList = res as TimeTrack[]);
  }


  
}
