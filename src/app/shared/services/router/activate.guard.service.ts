import { Injectable }             from '@angular/core';
import { CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';

import {UserTokenService } from '../user.token.service'
import {UserPermissionService } from '../user.permission.service'
import { ToastService } from 'local/shared/toast/toast';


@Injectable()
export class LoggedInGuardService implements CanActivate {
    constructor(private _userTokenService: UserTokenService, private _router: Router) { }

    canActivate(
        // Not using but worth knowing about
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        
            return true;
    }
}

@Injectable()
export class MenuPermissionGuardService implements CanActivate {
  constructor(private _router: Router, private _userPermissionService: UserPermissionService
    , private _toastService: ToastService
  ) { }

    canActivate(
        // Not using but worth knowing about
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        
            return true;
        
    }
}
