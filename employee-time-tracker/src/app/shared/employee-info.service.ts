import { EmployeeInfo } from './employee-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  formData: EmployeeInfo;
  readonly rootURL = 'http://localhost:5040/api';
  list : EmployeeInfo[];

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
}
