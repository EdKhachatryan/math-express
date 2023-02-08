import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../../libs/shared/src/lib/components/home/home.component";


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
        component: HomeComponent,
        children: []
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
        // Notice custom routing logic down below
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
        onSameUrlNavigation: 'reload',
    }) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
