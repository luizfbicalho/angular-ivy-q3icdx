import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ToastService } from 'local/shared/toast/toast';
import { AcessoService } from 'local/shared/services/acesso/acesso.service';
import { AcessoViewModel } from 'local/viewmodels/acessoviewmodel.model';
import { Observable } from 'rxjs';

import { map, first } from 'rxjs/operators';

@Injectable()
export class PermissionsFromApiGuardService implements CanActivate {
	constructor(private _toastService: ToastService, private acessoService: AcessoService) {}

	canActivate(
		// Not using but worth knowing about
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {
		let id = next.url[next.url.length - 1].toString();
		let acesso = new AcessoViewModel();
		acesso.InstanciaPasso_Id = parseInt(id);
		acesso.Url = state.url;
		return this.acessoService
      .postAcesso(acesso)
      .pipe(
			    map((x) => {
				  if (x.Acesso) {
					  return true;
				  } else {
					  this._toastService.error('Acesso negado', state.url);
				    return false;
				  }
        }),
        first()
      );
	}
}
