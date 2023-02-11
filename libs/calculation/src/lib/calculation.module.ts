import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';
import { CalculationRoutingModule } from "./calculation-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CalculationRoutingModule,
        ReactiveFormsModule,
        NgbAlertModule,
    ],
    declarations: [ CalculationComponent ],
})
export class CalculationModule {
}
