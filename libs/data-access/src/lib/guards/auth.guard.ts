import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { AuthState } from "../store";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly store: Store) {}

    canActivate(): Observable<boolean> {
        return this.store.select(AuthState.authenticated).pipe(tap(res => res));
    }
}
