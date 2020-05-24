import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoanRequestContainer } from './loan-request.container';

const routes: Routes = [
  {
    path: '',
    component: LoanRequestContainer,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class LoanRequestRoutingModule { }
