import { createAction, props } from '@ngrx/store';

import { UserPayload } from '../../entities/user';

export const sendRequestAction = createAction(
  '[LoanRequest] send request',
  props<{payload: UserPayload}>());

export const sendRequestSuccessAction = createAction(
  '[LoanRequest] send request success',
  props<{data: UserPayload}>());

export const setRangeAction = createAction(
  '[LoanRequest] set range',
  props<{range: number}>());

export const LoanRequestActions = {
  sendRequestAction,
  sendRequestSuccessAction,
  setRangeAction
};
