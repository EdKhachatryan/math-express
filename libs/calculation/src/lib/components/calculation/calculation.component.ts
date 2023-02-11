import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CalculationService, GlobalErrorHandlerService } from "@math-express/data-access";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BehaviorSubject, debounceTime, Observable, Subject, tap } from "rxjs";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";

@UntilDestroy()
@Component({
    selector: 'math-express-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: [ './calculation.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationComponent implements OnInit {
    @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert | undefined;

    public error$ = new BehaviorSubject<string | undefined>(undefined);
    public errorMessage = '';

    public calculationResult$ = new BehaviorSubject<number | undefined>(undefined);

    public calculationForm = new FormGroup({
        calcData: new FormControl('', [ Validators.required ]),
    });

    constructor(private calculation: CalculationService,
                private errorHandler: GlobalErrorHandlerService,
    ) {
    }

    ngOnInit() {
        this.error$.subscribe((message) => {
            console.log(message);
        });
       /* this.error$.subscribe((message) => (this.errorMessage = message));
        this.error$.pipe(debounceTime(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });*/
    }

    calculate() {
        this.calculation.convertToken(JSON.parse('["10","6","9","3","+","-11","*","/","*","17","+", "sadff", "5","+"]'))
            .pipe(untilDestroyed(this),
                tap(res => {
                    this.calculationResult$.next(res);
                        console.log('COMPONENT SUCCESS', res);
                    },
                    error => {
                        this.errorHandler.handleError(error).pipe(tap(message => {
                            console.log(message);

                        })).subscribe(message => {
                            console.log(message);

                        })
                    // this.error$.next();
                    }),
            ).subscribe();
    }
}
