import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{ path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
exports: [RouterModule]
})

export class AppRoutingModule {

}
