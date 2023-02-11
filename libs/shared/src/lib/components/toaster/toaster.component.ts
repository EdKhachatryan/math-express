import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToasterService, ToastEvent } from "@math-express/data-access";


@Component({
    selector: 'app-toaster',
    templateUrl: './toaster.component.html',
    styleUrls: ['./toaster.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent implements OnInit {
    currentToasts: ToastEvent[] = [];

    constructor(private toastService: ToasterService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.subscribeToToasts();
    }

    subscribeToToasts() {
        this.toastService.toastEvents.subscribe((toasts) => {
            const currentToast: ToastEvent = {
                type: toasts.type,
                title: toasts.title,
                message: toasts.message,
            };
            this.currentToasts.push(currentToast);
            this.cdr.detectChanges();
        });
    }

    dispose(index: number) {
        this.currentToasts.splice(index, 1);
        this.cdr.detectChanges();
    }
}
