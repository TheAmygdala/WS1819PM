import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private user: User) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/users/sign-in']);
      return false;
    }
  }
}
