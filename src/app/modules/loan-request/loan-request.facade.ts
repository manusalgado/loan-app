import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoanRequestState } from './store/state/loan-request.state';
import { LoanRequestActions } from './store/actions/loan-request.actions';
import { UserPayload } from './entities/user';
import { Observable } from 'rxjs';
import { loading, selectedRange } from './store/selectors/loan.selectors';


@Injectable()
export class LoanRequestFacade {

  constructor (
    private store: Store<LoanRequestState>
  ) { }

  public loading$: Observable<boolean> = this.store.pipe(
    select(loading)
  );

  public selectedRange$: Observable<number> = this.store.pipe(
    select(selectedRange)
  );

  public sendRequest(payload: UserPayload): void {
    this.store.dispatch(LoanRequestActions.sendRequestAction({payload}));
  }

  public setRange(range: number): void {
    this.store.dispatch(LoanRequestActions.setRangeAction({range}));
  }

}
