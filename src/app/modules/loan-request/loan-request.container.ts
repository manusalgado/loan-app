import { Component, OnInit } from '@angular/core';
import { LoanRequestFacade } from './loan-request.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.container.html',
  styleUrls: ['./loan-request.container.sass']
})
export class LoanRequestContainer implements OnInit {

  constructor(private facade: LoanRequestFacade) { }

  ngOnInit(): void {
  }

  get loading$(): Observable<boolean> {
    return this.facade.loading$
  }

}
