﻿import { Routes, RouterModule } from '@angular/router';

import { UserEmployeeInfoComponent } from './employees-info/user-employee-info.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './helpers/auth.guard';
import { ManagersComponent } from './managers/managers.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserEmployeeInfoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'managers', component: ManagersComponent, canActivate: [AuthGuard]},

    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);