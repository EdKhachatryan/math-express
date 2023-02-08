import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
    imports: [CommonModule, AuthRoutingModule,],
    declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {
}
