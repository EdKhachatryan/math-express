import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DataAccessModule } from "@math-express/data-access";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        RouterModule,
        DataAccessModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModalModule,
    ],
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ],
})
export class AuthModule {
}
