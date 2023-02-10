import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../../libs/shared/src/lib/components/home/home.component";
import { AuthGuard } from "@math-express/data-access";


/*const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
        children: [
            {
                path: 'login',
                loadChildren: () => import('@math-express/libs/auth').then((m) => m.AuthModule),
                // canActivate: [],
            },
            {
                path: '', //  loadChildren: '@demo-app/products#ProductsModule',
                loadChildren:  () => import('@math-express/libs/shared').then((m) => m.SharedModule),
            },
        ],
    },
];*/
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
