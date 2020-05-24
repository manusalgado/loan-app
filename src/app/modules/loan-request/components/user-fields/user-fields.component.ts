import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v1 as uuidv1 } from 'uuid';
import { Observable } from 'rxjs';
import _ from 'lodash';

import { UserPayload } from '../../entities/user';
import { LoanRequestFacade } from '../../loan-request.facade';

@Component({
  selector: 'app-user-fields',
  templateUrl: './user-fields.component.html',
  styleUrls: ['./user-fields.component.sass']
})
export class UserFieldsComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  @Input() selectedRange: number;

  constructor(private facade: LoanRequestFacade) { }

  ngOnInit(): void {
    this.initForm();
  }

  get loading$(): Observable<boolean> {
    return this.facade.loading$;
  }

  public initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const {name, email, document} = this.form.value;
      const payCredit: boolean = Math.random() < 0.5;
      const payload: UserPayload = {
        name,
        email,
        document,
        id: uuidv1(),
        amountRequest: this.selectedRange,
        payCredit
      };
      this.sendRequest(payload);
      this.form.reset();
    }
  }

  public sendRequest(payload: UserPayload): void {
    this.facade.sendRequest(payload);
  }

}
