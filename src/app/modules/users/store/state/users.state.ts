import { UsersState } from '../reducers/users.reducer';

export type UserState = Readonly <{
  users: UsersState;
}>;
