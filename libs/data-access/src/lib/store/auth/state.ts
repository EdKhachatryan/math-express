import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClearUser, Login, Logout, } from './actions';

export interface AuthStateModel {
    authenticated?: boolean;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        authenticated: undefined,
    },
})
@Injectable()
export class AuthState {
    constructor(
        // private readonly dataAccess: BazaAuthDataAccess,

    ) {}

    @Selector()
    static authenticated(state: AuthStateModel) {
        return state.authenticated;
    }

    @Action(Login, { cancelUncompleted: true })
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return /*this.dataAccess.auth(action.data).pipe(
            retryWhen(genericRetryStrategy()),
            tap((response) => {
                this.jwtService.setJwt(
                    {
                        accessToken: response.accessToken,
                        refreshToken: response.refreshToken,
                    },
                    response.jwtPayload,
                );

                ctx.patchState({ authenticated: true });
                ctx.dispatch(new AccountInit()).subscribe(() => {
                    ctx.dispatch(new GetItems());
                    ctx.dispatch(new GetDividendAlert());
                });
            }),
        );*/
    }

    @Action(ClearUser)
    clearUser(ctx: StateContext<AuthStateModel>) {
  /*      ctx.patchState({ authenticated: false });
        ctx.dispatch(new AccountUnset());
        this.jwtService.destroy();*/
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        return /*combineLatest([
            this.dataAccess.invalidateToken({ jwt: this.jwtService.jwt.accessToken }),
            this.dataAccess.invalidateToken({ jwt: this.jwtService.jwt.refreshToken }),
        ]).pipe(
            tap(() => {
                ctx.patchState({ authenticated: false });
                ctx.dispatch(new AccountUnset());
                this.jwtService.destroy();
            }),
        );*/
    }
}
