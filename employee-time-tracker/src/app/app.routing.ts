﻿import { Routes, RouterModule } from '@angular/router';

import { UserEmployeeInfoComponent } from './employees-info/user-employee-info.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './helpers/auth.guard';
import { ManagerComponent } from './managers/manager/manager.component';

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserEmployeeInfoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'manager', component: ManagerComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);