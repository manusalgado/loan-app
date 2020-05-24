import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { UserPayload } from 'src/app/modules/loan-request/entities/user';
import { UserActions } from '../actions/users.actions';

export interface UsersState extends EntityState<UserPayload> { }

export function getUserId(user: UserPayload): number {
  return user.document;
}

export const usersAdapter: EntityAdapter<UserPayload> = createEntityAdapter<UserPayload>({
  selectId: getUserId
});

export const initialState: UsersState = usersAdapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(UserActions.getUsersSuccessAction, (state, {users} ) => {
    return usersAdapter.addAll(users, state);
  })
);

export function usersReducer(state: UsersState, action: Action): UsersState {
  return reducer(state, action);
}

export const {
  selectAll,
  selectIds,
  selectEntities,
  selectTotal
} = usersAdapter.getSelectors();
