﻿﻿import { Routes, RouterModule } from '@angular/router';

import { EmployeesInfoComponent } from './employees-info/employees-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', component: EmployeesInfoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);