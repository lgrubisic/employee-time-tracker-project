import { EmployeeInfo } from '../models/employee-info.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TimeTrack } from '../models/time-track.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  formData: EmployeeInfo;
  readonly rootURL = 'http://localhost:5050/api';
  list : EmployeeInfo[];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<EmployeeInfo[]>(this.rootURL + '/EmployeeInfo');
  }
  getEmployeeById(id_num: Number) {
    return this.http.get<EmployeeInfo[]>(this.rootURL + '/EmployeeInfo/' + id_num);
  }
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
}
