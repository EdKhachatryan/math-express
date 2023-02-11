import { Component } from '@angular/core';
import { CalculationService, GlobalErrorHandlerService } from "@math-express/data-access";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { tap } from "rxjs";

@UntilDestroy()
@Component({
    selector: 'math-express-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: [ './calculation.component.scss' ],
})
export class CalculationComponent {
    public calculationForm = new FormGroup({
        calcData: new FormControl('', [ Validators.required ]),
    });

    constructor(private calculation: CalculationService,
                private errorHandler: GlobalErrorHandlerService,
    ) {
    }

    calculate() {
        this.calculation.convertToken(JSON.parse('["10","6","9","3","+","-11","*","/","*","17","+", "sadff", "5","+"]'))
            .pipe(untilDestroyed(this),
                tap(res => {
                        console.log('COMPONENT SUCCESS', res);
                    },
                    error => {
                        this.errorHandler.handleError(error)
                    }),
            ).subscribe();
    }
}
