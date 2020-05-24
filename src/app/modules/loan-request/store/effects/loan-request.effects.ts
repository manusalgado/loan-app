import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';

import { LoanRequestActions } from '../actions/loan-request.actions';
import { LoanRequestService } from '../../loan-request.service';

@Injectable()
export class LoanRequestEffects {
  constructor(
    private actions$: Actions,
    private service: LoanRequestService
  ) { }

  sendRequest$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(LoanRequestActions.sendRequestAction),
      exhaustMap(action => this.service.send(action.payload)
      .pipe(
        map((data) => LoanRequestActions.sendRequestSuccessAction({data})),
        catchError(() => EMPTY)
      ))
    ));

}
