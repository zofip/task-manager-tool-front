import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //   path: '',
      //   component: TrayRequestsComponent
      // },
      // {
      //   path: 'view-request/:numEligibility',
      //   component: ViewRequestComponent
      // },
      // {
      //   path: 'register-request/:codEligibilityType',
      //   component: RegisterRequestComponent
      // },
      // {
      //   path: 'against-receipt/:codEligibilityType/:numEligibility',
      //   component: AgainstReceiptComponent
      // },
      // {
      //   path: 'change-password',
      //   component: ChangePasswordComponent
      // },
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
