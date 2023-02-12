import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CalculationService, ErrorHandlerService } from "@math-express/data-access";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BehaviorSubject, tap } from "rxjs";

@UntilDestroy()
@Component({
    selector: 'math-express-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: [ './calculation.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationComponent {
        public calculationResult$ = new BehaviorSubject<number | undefined>(undefined);

    public calculationForm = new FormGroup({
        calcData: new FormControl('', [ Validators.required ]),
    });

    constructor(private calculation: CalculationService,
                private errorHandler: ErrorHandlerService,
    ) {
    }

    calculate() {
        const data = this.calculationForm.value.calcData
        this.calculation.convertToken(JSON.parse(data as string))
            .pipe(untilDestroyed(this),
                tap(res => {
                        this.calculationResult$.next(res);
                    },
                    error => {
                        this.errorHandler.handleError(error).pipe().subscribe();
                    }),
            ).subscribe();
    }
}
