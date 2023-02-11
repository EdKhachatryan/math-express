import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticate, Login } from "@math-express/data-access";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { tap } from "rxjs";

@UntilDestroy()
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

    public loginForm = new FormGroup({
        username: new FormControl('', [ Validators.required ]),
        password: new FormControl('', [ Validators.required ])
    });

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store) {
    }

    login() {
        const loginData: Authenticate = {
            username: this.loginForm.value.username as string,
            password: this.loginForm.value.password as string,
        }
        this.store.dispatch(new Login(loginData)).pipe(
            untilDestroyed(this),
            tap(res => {
            const id = res.auth.user.id;

            if (id && id !== -1) {
                this.activeModal.close('Close click');
            }
        })).subscribe();
    }
}
