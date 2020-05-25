import { UsersState } from '../reducers/data/users.reducer';

export type UserState = Readonly <{
  users: UsersState;
}>;
