import { createAction, props } from '@ngrx/store';

import { UserPayload } from '../../entities/user';

export const sendRequestAction = createAction(
  '[LoanRequest] send request',
  props<{payload: UserPayload}>());

export const sendRequestSuccessAction = createAction(
  '[LoanRequest] send request success',
  props<{data: any}>())

export const LoanRequestActions = {
  sendRequestAction,
  sendRequestSuccessAction
}