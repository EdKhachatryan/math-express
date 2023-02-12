import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Authenticate, User } from "../../models";
import { environment } from "../../../../../../src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
        environment.apiEndpoint + '/login',
        authenticate
    ).pipe(tap((user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
    }));
  }

  logout(): void {
    this.router.navigateByUrl('/');
    localStorage.removeItem('user');

  }
}
