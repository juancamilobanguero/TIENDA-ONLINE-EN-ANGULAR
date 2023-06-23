import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/api/user/user.service';
export const userGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const userService = inject(UserService)
  const f = userService.decodeToken()

  if(userService.isLoggedIn())return true

  router.navigate(['/ingresar'])
  return true;
};
