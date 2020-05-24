import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducer } from '@ngrx/store';

import { LoanRequestContainer } from './loan-request.container';
import { LoanRequestRoutingModule } from './loan-request-routing.module';
import { LoanRequestState } from './store/state/loan-request.state';
import { RequestContentComponent } from './components/request-content/request-content.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { UserFieldsComponent } from './components/user-fields/user-fields.component';
import { LoanRequestFacade } from './loan-request.facade';
import { EffectsModule } from '@ngrx/effects';
import { LoanRequestEffects } from './store/effects/loan-request.effects';
import { LoanRequestService } from './loan-request.service';
import { HttpClientModule } from '@angular/common/http';

export const LOAN_REQUEST_TOKEN = new InjectionToken<
  ActionReducer<LoanRequestState>
>('Feature LoanRequestModule Reducers');

@NgModule({
  declarations: [LoanRequestContainer, RequestContentComponent, RequestFormComponent, UserFieldsComponent],
  imports: [
    CommonModule,
    LoanRequestRoutingModule,
    StoreModule.forFeature('loanRequestModule', LOAN_REQUEST_TOKEN),
    EffectsModule.forFeature([LoanRequestEffects]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOAN_REQUEST_TOKEN, useValue: {}},
    LoanRequestFacade,
    LoanRequestService
  ]
})
export class LoanRequestModule { }
