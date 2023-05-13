import { Injectable, inject }     from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot }    from '@angular/router';
import { UserStoreService } from './user-store.service';
import { Observable, catchError, map, of } from 'rxjs';

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthGuardService);
  const router = inject(Router);

  return authService.checkLogin().pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['route-to-fallback-page']);
      return of(false);
    })
  );
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);


@Injectable()


export class AuthGuardService implements CanActivate {
  [x: string]: any;

  constructor(private userStore: UserStoreService,
              private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AuthGuard#canActivate called');

    if (this.userStore.isLoggedIn()) { return true };

    console.log('AuthGuard#canActivate not authorized to access page');
    // Can store current route and redirect back to it
    // Store it in a service, add it to a query param
    this.router.navigate(['login']);

    return false;
  }
}
