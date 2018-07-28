import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.check();
  }

  check() {
    if (!this.authService.checkIfLoggedIn()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
