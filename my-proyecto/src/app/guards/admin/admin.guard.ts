import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/api/user/user.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const userService = Inject(UserService)
  const router = Inject(Router)

  let decoded = userService.decodeToken()

  if (decoded && decoded.role === '1')return true

  router.navigate(['/home'])
  
  return true;
};
