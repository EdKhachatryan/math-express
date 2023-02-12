import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "@math-express/libs/auth";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "@math-express/libs/shared";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalculationModule } from "@math-express/calculation";
import { ErrorHandlerService } from "@math-express/data-access";
import { UtilModule } from "@math-express/util";

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        AppRoutingModule,
        AuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        CalculationModule,
        SharedModule,
        RouterModule,
        HttpClientModule,
        NgbModule,
        NgxsModule.forRoot([],),
        UtilModule,
    ],
    providers: [ {provide: ErrorHandler, useClass: ErrorHandlerService} ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
