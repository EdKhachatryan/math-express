import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "@math-express/libs/auth";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {
    constructor(private modalService: NgbModal) {
    }

    open() {
        console.log('modal open')
        this.modalService.open(LoginComponent, { size: 'lg' });
    }
}
