import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalculationService {

    convertToken(token: string): Observable<number> {
        if (!token) {
            throw new Error('Token is required');
        }

        const tokens: Array<string> =  JSON.parse(token);
        const expression: Array<string | number> = [];

        tokens.map((item) => {
            const num = Number(item);

            if (!isNaN(num)) {
                expression.push(num);
            } else {
                if (expression.length < 2) {
                    throw new Error(`"${ item }" insufficient operands.`);
                }
                const o2 = expression.pop(), o1 = expression.pop();

                switch (item) {
                    case '+':
                        expression.push(Number(o1) + Number(o2));
                        break;
                    case '-':
                        expression.push(Number(o1) - Number(o2));
                        break;
                    case '*':
                        expression.push(Number(o1) * Number(o2));
                        break;
                    case '/':
                        expression.push(Math.trunc(Number(o1) / Number(o2)));
                        break;
                    case '^':
                        expression.push(Math.pow(Number(o1), Number(o2)));
                        break;
                    default:
                        throw new Error(`Unrecognized operator: [${ item }]`);
                }
            }
        })

        if (expression.length > 1) {
            throw new Error(`${ expression }: insufficient operators.`);
        }

        return of(Number(expression));
    }

}
