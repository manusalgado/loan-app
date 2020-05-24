import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';

import { LoanRequestActions } from '../../actions/loan-request.actions';

export const initialState = false;

const reducer = createReducer(
  initialState,
  on(LoanRequestActions.sendRequestAction, state => false),
  on(LoanRequestActions.sendRequestSuccessAction, state => false)
);

export const loadingReducer = produce((state: boolean, action: Action) => {
  return reducer(state, action);
});
