import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from '@ngrx/store';
import { changeFlag } from '../store/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.auth.isAuthenticated()) {
      this.store.dispatch(changeFlag({ data: false }))
      return true
    } else {
      this.store.dispatch(changeFlag({ data: true }))
      this.auth.logout()
      this.router.navigate(['/login'])
    }
  }



}
