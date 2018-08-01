import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.check();
  }

  check() {
    if (!this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
