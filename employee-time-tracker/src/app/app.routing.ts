﻿import { Routes, RouterModule } from '@angular/router';

import { UserEmployeeInfoComponent } from './employees-info/user-employee-info.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserEmployeeInfoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);