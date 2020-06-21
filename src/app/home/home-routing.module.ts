import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { AdminComponent } from '../admin/pages/admin.component';

import { AuthGuard } from '../core/services/security/auth-guard';

import { Role } from 'src/app/core/enums';
import { DeveloperComponent } from '../developer/pages/developer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DeveloperComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Developer] }
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
