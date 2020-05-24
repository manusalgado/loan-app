import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { RANGES, DEFAULT_RANGE } from '../../constants/request';
import { LoanRequestFacade } from '../../loan-request.facade';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass']
})
export class RequestFormComponent {

  public rangevalue: number = DEFAULT_RANGE;
  public ranges: number[] = RANGES;

  constructor(private facade: LoanRequestFacade) { }

  public valueChanged(value: any): void {
    this.rangevalue = value.target.value;
    const range = parseInt(value.target.value, 10);
    if (!isNullOrUndefined(this.rangevalue)) {
      this.setRange(range);
    }
  }

  public setRange(range: number): void {
    this.facade.setRange(range);
  }

}
