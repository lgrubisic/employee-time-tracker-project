import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Manager } from '../models/manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  managerFormData: Manager;
  readonly rootURL = 'http://localhost:5050/api';
  managerList: Manager[];

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Manager[]>(this.rootURL + '/EmployeeManagers');
  }
  postManager() {
    return this.http.post(this.rootURL + '/EmployeeManagers', this.managerFormData);
  }
  putManager() {
    return this.http.put(this.rootURL + '/EmployeeManagers/' + this.managerFormData.manager_id, this.managerFormData);
  }
  deleteManager(manager_id) {
    return this.http.delete(this.rootURL + '/EmployeeManagers/' + manager_id);
  }
  refreshManagers() {
    this.http.get(this.rootURL + '/EmployeeManagers').toPromise().then(res => this.managerList = res as Manager[]);
  }
}
