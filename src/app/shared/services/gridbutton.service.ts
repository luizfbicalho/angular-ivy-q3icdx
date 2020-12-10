import { Injectable }             from '@angular/core';
import { CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';


import {UserPermissionService } from './user.permission.service'


interface GridColumnCommandItem {
    name?: string;
    text?: string;
    className?: string;
    click?: Function;
    permissao?: string;
}

@Injectable()

export class GridButtonService {
    constructor(
        private _userPermissionService: UserPermissionService) {
    }

    public GetButtons(buttons: GridColumnCommandItem[], tela: string): GridColumnCommandItem[] {
        let returnItens: GridColumnCommandItem[] = [];
        for (let b of buttons) {
            let strpermissao: string = "";
            if (b.permissao != null) {
                strpermissao = b.permissao.toLowerCase();
            }
            var permissao = tela + "." + strpermissao;
            if (b.permissao == null || this._userPermissionService.validatePermissaoAccess(permissao)) {
                // b.click = (e) => { e.preventDefault(); };
                var index = buttons.indexOf(b);
                returnItens.push(b);
                //buttons.splice(index, 1);
            }  
        }
        return returnItens;
    }

    public GetButton(tela: string, name: string): boolean {
        
        var permissao = tela + "." + name;
        return this._userPermissionService.validatePermissaoAccess(permissao);

    }
}
