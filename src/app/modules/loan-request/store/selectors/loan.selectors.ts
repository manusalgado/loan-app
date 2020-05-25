import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoanRequestState } from '../state/loan-request.state';

export const loanSelector = createFeatureSelector<LoanRequestState>('loanRequestModule');

export const loading = createSelector(
  loanSelector,
  (state: LoanRequestState) => state.loading
);

export const selectedRange = createSelector(
  loanSelector,
  (state: LoanRequestState) => state.range
);

export const selectStatus = createSelector(
  loanSelector,
  (state: LoanRequestState) => state.status
);

