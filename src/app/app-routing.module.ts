import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'loan-request',
    loadChildren: () =>
    import('./modules/loan-request/loan-request.module').then((m) => m.LoanRequestModule)
  },
  {
    path: '',
    loadChildren: () =>
    import('./modules/loan-request/loan-request.module').then((m) => m.LoanRequestModule)
  },
  {
    path: 'users',
    loadChildren: () =>
    import('./modules/users/users.module').then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
