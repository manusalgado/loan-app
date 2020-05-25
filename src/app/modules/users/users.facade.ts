import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserState } from './store/state/users.state';
import { UserActions } from './store/actions/users.actions';
import { UserPayload } from '../loan-request/entities/user';
import { selectAllUsers } from './store/selectors/users.selectors';


@Injectable()
export class UsersFacade {

  constructor (
    private store: Store<UserState>
  ) { }

  public users$: Observable<UserPayload[]> = this.store.pipe(
    select(selectAllUsers)
  );

  public getUsers(): void {
    this.store.dispatch(UserActions.getUsersAction());
  }

}
