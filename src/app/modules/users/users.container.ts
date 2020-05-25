import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersFacade } from './users.facade';
import { UserPayload } from '../loan-request/entities/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.sass']
})
export class UsersContainer implements OnInit {

  constructor(private facade: UsersFacade) { }

  ngOnInit(): void {
    this.getUsers();
  }

  get users$(): Observable<UserPayload[]> {
    return this.facade.users$;
  }

  public getUsers(): void {
    this.facade.getUsers();
  }

}
