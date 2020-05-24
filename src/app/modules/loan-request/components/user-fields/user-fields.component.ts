import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserPayload } from '../../entities/user';
import { LoanRequestFacade } from '../../loan-request.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-fields',
  templateUrl: './user-fields.component.html',
  styleUrls: ['./user-fields.component.sass']
})
export class UserFieldsComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  constructor(private facade: LoanRequestFacade) { }

  ngOnInit(): void {
    this.initForm();
  }

  get loading$(): Observable<boolean> {
    return this.facade.loading$
  }

  public initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
    })
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const {name, email, id} = this.form.value
      const payload: UserPayload = {
        name,
        email,
        id
      }
      this.sendRequest(payload);
    }
  }

  public sendRequest(payload: UserPayload): void {
    this.facade.sendRequest(payload);
  }

}
