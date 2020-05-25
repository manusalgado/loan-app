import { combineReducers } from '@ngrx/store';

import { usersReducer as users } from './data/users.reducer';

export const UsersRootReducer = combineReducers({
  users
});
