import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';
import { CalculationRoutingModule } from "./calculation-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CalculationRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [ CalculationComponent ],
})
export class CalculationModule {
}
