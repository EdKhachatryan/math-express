import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { SharedModule } from "@math-express/libs/shared";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DataAccessModule } from "@math-express/data-access";

@NgModule({
    imports: [CommonModule, AuthRoutingModule, RouterModule, DataAccessModule,  HttpClientModule, SharedModule, ReactiveFormsModule,],
    declarations: [LoginComponent, LoginFormComponent],
    exports: [LoginComponent, LoginFormComponent],
})
export class AuthModule {
}
