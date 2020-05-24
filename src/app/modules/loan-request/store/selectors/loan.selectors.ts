import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoanRequestState } from '../state/loan-request.state';

export const loanSelector = createFeatureSelector<LoanRequestState>('loanRequestModule');

export const loading = createSelector(
  loanSelector,
  (state: LoanRequestState) => state.loading
)
