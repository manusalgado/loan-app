import { Component, Input } from '@angular/core';

import { UserPayload } from 'src/app/modules/loan-request/entities/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent {
  @Input() users: UserPayload[];
  public displayedColumns: string[] = ['name', 'document', 'amountRequest', 'email', 'creditStatus'];
}
