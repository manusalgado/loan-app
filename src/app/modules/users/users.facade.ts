import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserState } from './store/state/users.state';
import { UserActions } from './store/actions/users.actions';


@Injectable()
export class UsersFacade {

  constructor (
    private store: Store<UserState>
  ) { }

  public getUsers(): void {
    this.store.dispatch(UserActions.getUsersAction());
  }

}
