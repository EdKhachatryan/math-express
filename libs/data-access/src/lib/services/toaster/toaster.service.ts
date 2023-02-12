import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { EventTypes, ToastEvent } from "../../models";

@Injectable({
    providedIn: 'root'
})
export class ToasterService {
    public toastEvents: Observable<ToastEvent>;
    private _toastEvents = new Subject<ToastEvent>();

    constructor() {
        this.toastEvents = this._toastEvents.asObservable();
    }

    showSuccessToast(title: string, message: string) {
        this._toastEvents.next({
            message,
            title,
            type: EventTypes.Success,
        });
    }

    showInfoToast(title: string, message: string) {
        this._toastEvents.next({
            message,
            title,
            type: EventTypes.Info,
        });
    }

    showWarningToast(title: string, message: string) {
        this._toastEvents.next({
            message,
            title,
            type: EventTypes.Warning,
        });
    }

    showErrorToast(title: string, message: string) {
        this._toastEvents.next({
            message,
            title,
            type: EventTypes.Error,
        });
    }
}
