import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedRoutingModule } from "./shared-routing.module";
import { MaterialModule } from "./modules/material.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedRoutingModule,
        MaterialModule
    ],
    declarations: [ HomeComponent ],
    exports: [ MaterialModule ],
})
export class SharedModule {
}
