import { DashboardGuard } from './auth/dashboard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})
export class AppRouters { }
