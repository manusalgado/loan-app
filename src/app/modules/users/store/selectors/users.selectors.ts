import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../state/users.state';
import * as fromReducer from '../reducers/data/users.reducer';

export const usersSelector = createFeatureSelector<UserState>('usersModule');

export const getUsers = createSelector(
  usersSelector,
  (state: UserState) => state.users
);

export const selectAllUsers = createSelector(getUsers, fromReducer.selectAll);
