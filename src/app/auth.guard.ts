import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService,private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn == true) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
