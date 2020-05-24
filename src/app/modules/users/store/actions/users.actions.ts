import { createAction, props } from '@ngrx/store';
import { UserPayload } from 'src/app/modules/loan-request/entities/user';

export const getUsersAction = createAction(
  '[Users] get users')

export const getUsersSuccessAction = createAction(
  '[Users] get users',
  props<{users: UserPayload[]}>())

export const UserActions = {
  getUsersAction,
  getUsersSuccessAction
}
