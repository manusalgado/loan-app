import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { UserActions } from '../actions/users.actions';
import { UsersService } from '../../users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private service: UsersService
  ) { }

    users$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(UserActions.getUsersAction),
        exhaustMap(() => this.service.get()
        .pipe(
          map((users) => {
            return UserActions.getUsersSuccessAction({users});
          }),
          catchError(() => EMPTY)
        ))
      ));

}
