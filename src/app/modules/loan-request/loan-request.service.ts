import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserPayload } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestService {

  constructor(private http: HttpClient) { }

  public send(payload: UserPayload): Observable<UserPayload> {
    const url = 'http://localhost:3000/loanRequests';
    return this.http.post<UserPayload>(url, payload);
  }

}
