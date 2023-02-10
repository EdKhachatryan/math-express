import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Authenticate, User } from "../../models";
import { environment } from "../../../../../../src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {

    return this.httpClient.post<User>(
        environment.apiEndpoint + '/login',
        authenticate
    ).pipe(tap((user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
    }));
  }
}
