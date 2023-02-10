import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';
import { CalculationRoutingModule } from "./calculation-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CalculationRoutingModule
    ],
    declarations: [ CalculationComponent ],
})
export class CalculationModule {
}
