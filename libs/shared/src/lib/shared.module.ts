import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedRoutingModule } from "./shared-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedRoutingModule,
    ],
    declarations: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
    ],
})
export class SharedModule {
}
