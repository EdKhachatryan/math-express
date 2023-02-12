import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Auth, Login, Logout, } from './actions';
import { User } from "../../models";
import { AuthService } from "../../services";
import { tap } from "rxjs";
import { UntilDestroy } from "@ngneat/until-destroy";

export interface AuthStateModel {
    user: User;
    authenticated: boolean
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: {
            username: '',
            role: '',
            token: '',
            id: -1
        },
        authenticated: false
    },
})
@UntilDestroy()
@Injectable()
export class AuthState {
    constructor(
        private readonly dataAccess: AuthService,
    ) {
    }

    @Selector()
    static authenticated(state: AuthStateModel) {
        return state.authenticated;
    }

    @Selector()
    static user(state: AuthStateModel) {
        return state.user;
    }

    @Action(Auth, {cancelUncompleted: true})
    getUserAuth(ctx: StateContext<AuthStateModel>) {
        const user = JSON.parse(localStorage.getItem('user') as string)

        localStorage.getItem('user') ? ctx.patchState({user: user, authenticated: true,}) :
            ctx.patchState({authenticated: false,});
    }

    @Action(Login, {cancelUncompleted: true})
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this.dataAccess.login(action.data).pipe(tap((response) => {
            ctx.patchState({user: response, authenticated: true,});
        }));
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        this.dataAccess.logout();
        return ctx.patchState({
            user: {
                username: '',
                role: '',
                token: '',
                id: -1
            },
            authenticated: false,
        });
    }
}
