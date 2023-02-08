import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
/*    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/(modal:auth/login)',
    },*/
    {
        path: 'login',
        component: LoginComponent,
    },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class AuthRoutingModule {
}
