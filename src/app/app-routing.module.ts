import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "@math-express/data-access";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
    {
        path: '',
        loadChildren:  () => import('@math-express/libs/shared').then((m) => m.SharedModule),
    },
    {
        path: 'calculation',
        loadChildren:  () => import('@math-express/calculation').then((m) => m.CalculationModule),
        canActivate: [ AuthGuard ],
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
        onSameUrlNavigation: 'reload',
    }) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
