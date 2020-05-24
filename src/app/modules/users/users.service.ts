import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPayload } from '../loan-request/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public get(): Observable<UserPayload[]> {
    const url = 'http://localhost:3000/loanRequests';
    return this.http.get<UserPayload[]>(url);
  }
}
