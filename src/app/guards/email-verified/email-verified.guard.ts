import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EmailVerifiedGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this._authService.user.pipe(map((user) => {
        if ((user.emailVerified && activatedRoute.routeConfig?.path === activatedRoute.data['verificationTrueRedirectTo']) ||
          (!user.emailVerified && activatedRoute.routeConfig?.path === activatedRoute.data['verificationFalseRedirectTo'])) {
          return true;
        } else if (user.emailVerified && activatedRoute.routeConfig?.path !== activatedRoute.data['verificationTrueRedirectTo']) {
          return this._router.parseUrl(activatedRoute.data['verificationTrueRedirectTo'])
        } else {
          return this._router.parseUrl(activatedRoute.data['verificationFalseRedirectTo'])
        }
      }
    ))
  }
}
