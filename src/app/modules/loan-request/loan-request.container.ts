import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoanRequestFacade } from './loan-request.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.container.html',
  styleUrls: ['./loan-request.container.sass']
})
export class LoanRequestContainer implements OnInit, OnDestroy {

  constructor(private facade: LoanRequestFacade) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.clearStore();
  }

  get loading$(): Observable<boolean> {
    return this.facade.loading$;
  }

  get selectedRange$(): Observable<number> {
    return this.facade.selectedRange$;
  }

  get status$(): Observable<boolean> {
    return this.facade.status$;
  }

  public clearStore(): void {
    this.facade.clearStore();
  }

}
