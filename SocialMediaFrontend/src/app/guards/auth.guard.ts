import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

export const authGuard: CanActivateFn = (route,state) => {
  const service=inject(UserServiceService)
  const router=inject(Router)
  if(service.isLogIn())
  {
     return true;
  }
  else{
    alert("Please Login First");
    router.navigateByUrl('/login');
    return false;
  }
 
};
