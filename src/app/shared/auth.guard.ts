import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';
import { inject } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userAuthService = inject(UserAuthService);
  const localStorageService = inject(LocalStorageService)
  const router = inject(Router);
  if(userAuthService.getUserDetails() && localStorageService.get('loggedin') )
    return true;
  router.navigate(['login']);
  return false;
};
