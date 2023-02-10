import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "@math-express/libs/auth";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Select, Store } from "@ngxs/store";
import { Auth, AuthState, Logout, User } from "@math-express/data-access";
import { Observable } from "rxjs";

@UntilDestroy()
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Select(AuthState.user)
    user$: Observable<User> | undefined;

    @Select(AuthState.authenticated)
    auth$: Observable<boolean> | undefined;

    constructor(private modalService: NgbModal,
                private store: Store) {
        this.store.dispatch(new Auth()).pipe(untilDestroyed(this))
    }

    open() {
        this.modalService.open(LoginComponent, {size: 'lg'});
    }

    logout() {
        this.store.dispatch(new Logout()).pipe(untilDestroyed(this)).subscribe();
    }
}
