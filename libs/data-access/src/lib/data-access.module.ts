import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStateModule } from "./store";
import { AuthGuard } from "./guards";

@NgModule({
    imports: [
        CommonModule,
        AuthStateModule,
    ],
    providers: [ AuthGuard ],
})
export class DataAccessModule {
}
