import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';

import { LoanRequestActions } from '../../actions/loan-request.actions';

export const initialState: boolean = null;

const reducer = createReducer(
  initialState,
  on(LoanRequestActions.statusAction, (state, {status}) => (status)),
  on(LoanRequestActions.clearStoreAction, (state, {}) => initialState)
);

export const statusReducer = produce((state: boolean, action: Action): boolean => {
  return reducer(state, action);
});
