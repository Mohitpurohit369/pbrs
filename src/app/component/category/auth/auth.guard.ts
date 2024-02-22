import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
 
  let authservice = inject(AuthService);
  let router = inject(Router);
  return authservice.isLoggedIn.pipe(
    map((isloggedin: boolean) => {
      if (!isloggedin) {
        router.navigate(['auth/login']);
        return false;    
      }
      return true;

    })
  );
};
