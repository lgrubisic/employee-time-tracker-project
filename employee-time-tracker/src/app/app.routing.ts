﻿import { Routes, RouterModule } from '@angular/router';

import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './helpers/auth.guard';
import { ManagerViewComponent } from './managers/manager-view/manager-view.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'user', component: EmployeeViewComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'managers', component: ManagerViewComponent, canActivate: [AuthGuard]},

    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);