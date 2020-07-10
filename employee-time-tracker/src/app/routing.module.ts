import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { EmployeesInfoComponent } from './employees-info/employees-info.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'employees-info/employees-info', component: EmployeesInfoComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {}
