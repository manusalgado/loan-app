import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoanRequestState } from './store/state/loan-request.state';
import { LoanRequestActions } from './store/actions/loan-request.actions';
import { UserPayload } from './entities/user';


@Injectable()
export class LoanRequestFacade {

  constructor (
    private store: Store<LoanRequestState>
  ) { }

  public sendRequest(payload: UserPayload): void {
    this.store.dispatch(LoanRequestActions.sendRequestAction({payload}));
  }

}
