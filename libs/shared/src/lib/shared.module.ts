import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedRoutingModule } from "./shared-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NgbModalModule, NgbToast } from "@ng-bootstrap/ng-bootstrap";
import { AuthModule } from "@math-express/libs/auth";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ToastComponent } from "./components/toast/toast.component";
import { ToasterComponent } from "./components/toaster/toaster.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedRoutingModule,
        NgbModalModule,
        AuthModule,
        NgbToast,
    ],
    declarations: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        PageNotFoundComponent,
        ToastComponent,
        ToasterComponent,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        ToastComponent,
        ToasterComponent,
    ],
})
export class SharedModule {
}
