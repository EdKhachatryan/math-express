import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationComponent } from "./components/calculation/calculation.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CalculationComponent,
            },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class CalculationRoutingModule {
}
