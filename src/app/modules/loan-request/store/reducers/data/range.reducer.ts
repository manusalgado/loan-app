import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';

import { LoanRequestActions } from '../../actions/loan-request.actions';

export const initialState = 100000;

const reducer = createReducer(
  initialState,
  on(LoanRequestActions.setRangeAction, (state, {range}) => (range)),
  on(LoanRequestActions.clearStoreAction, (state, {}) => initialState)
);

export const rangeReducer = produce((state: number, action: Action): number => {
  return reducer(state, action);
});
