import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersContainer } from './users.container';

const routes: Routes = [
  {
    path: '',
    component: UsersContainer,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
