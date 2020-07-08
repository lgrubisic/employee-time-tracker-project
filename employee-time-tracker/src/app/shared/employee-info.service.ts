import { EmployeeInfo } from './employee-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TimeTrack } from './time-track.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  formData: EmployeeInfo;
  timeFormData: TimeTrack;
  readonly rootURL = 'http://localhost:5040/api';
  list : EmployeeInfo[];
  timeList: TimeTrack[];

  constructor(private http: HttpClient) { }

  postEmployeeInfo() {
    return this.http.post(this.rootURL + '/EmployeeInfo', this.formData);
  }
  putEmployeeInfo() {
    return this.http.put(this.rootURL + '/EmployeeInfo/'+ this.formData.id_num, this.formData);
  }
  deleteEmployeeInfo(id) {
    return this.http.delete(this.rootURL + '/EmployeeInfo/'+ id);
  }
  refreshList(){
    this.http.get(this.rootURL + '/EmployeeInfo')
    .toPromise()
    .then(res => this.list = res as EmployeeInfo[]);
  }

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
    this.http.get(this.rootURL + '/TimeTracking')
    .toPromise()
    .then(res => this.timeList = res as TimeTrack[]);
  }


  
}
