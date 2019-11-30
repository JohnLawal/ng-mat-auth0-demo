import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) { return true; }

    this.router.navigate(['/']);
    return false;
  }
}
