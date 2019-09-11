import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
        ): boolean | Promise<boolean> | Observable<boolean> {
            return this.authService.user.pipe(map(user => {
                return !!user;
            }),
            tap(isAuthenticated => {
                if (!isAuthenticated) {
                    this.router.navigate(['/auth']);
                }
            }));
        }
}
