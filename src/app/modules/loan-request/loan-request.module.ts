import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRequestContainer } from './loan-request.container';
import { LoanRequestRoutingModule } from './loan-request-routing.module';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { LoanRequestState } from './store/state/loan-request.state';
import { RequestContentComponent } from './components/request-content/request-content.component';
import { RequestFormComponent } from './components/request-form/request-form.component';

export const LOAN_REQUEST_TOKEN = new InjectionToken<
  ActionReducer<LoanRequestState>
>('Feature LoanRequestModule Reducers');

@NgModule({
  declarations: [LoanRequestContainer, RequestContentComponent, RequestFormComponent],
  imports: [
    CommonModule,
    LoanRequestRoutingModule,
    StoreModule.forFeature('loanRequestModule', LOAN_REQUEST_TOKEN)
  ],
  providers: [{provide: LOAN_REQUEST_TOKEN, useValue: {}}]
})
export class LoanRequestModule { }
