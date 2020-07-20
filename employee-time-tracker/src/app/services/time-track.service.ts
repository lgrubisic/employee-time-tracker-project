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
  userTimeList: TimeTrack[];

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
  refreshTimeList(){
    this.http.get(this.rootURL + '/TimeTracking').toPromise().then(res => this.timeList = res as TimeTrack[]);
  }  
}
