import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

    handleError(error: any): Observable<string> {
        console.log('Error :- ' + error);
        return of(`Error: ${ error }`)
    }
}
