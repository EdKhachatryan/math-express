import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
    imports: [ CommonModule, RouterModule, SharedRoutingModule ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
})
export class SharedModule {
}
