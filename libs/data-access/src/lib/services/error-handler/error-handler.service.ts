import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { ToasterService } from "../toaster/toaster.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

    constructor(private toastService: ToasterService) {
    }

    handleError(error: any): Observable<string> {
        this.toastService.showErrorToast('Error occurred', error);
        return of(`Error: ${ error }`)
    }
}
