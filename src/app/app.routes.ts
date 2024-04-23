import { Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignOutComponent } from './components/auth/sign-out/sign-out.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: 'catalog'},

    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-out', component: SignOutComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'catalog', component: CatalogComponent}
];