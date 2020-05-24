import { Component, OnInit } from '@angular/core';

import { UsersFacade } from './users.facade';

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

  public getUsers(): void {
    this.facade.getUsers();
  }

}
