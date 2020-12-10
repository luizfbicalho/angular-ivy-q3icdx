import { Injectable } from '@angular/core';
import { UserTokenService } from './user.token.service'

@Injectable()

export class UserPermissionService {

  constructor(private _userTokenService: UserTokenService) { }

  public validateMenuAccess(menuRoute: string): boolean {
    var token = this._userTokenService.getTokenObject();
    menuRoute = '/' + menuRoute;
    var retorno = false;
    if (token && token.menus) {
      if (token.menus instanceof Array) {
        retorno = token.menus.indexOf(menuRoute) >= 0;
      }
      if (token.menus instanceof String) {
        retorno = token.menus == menuRoute;
      }
    }
    return retorno;
  }

  public validatePermissaoAccess(permissao: string): boolean {
    var token = this._userTokenService.getTokenObject();
    var retorno = false;

    if (token && token.permissoes) {
      if (Array.isArray(token.permissoes)) {

        var lowerPermissoes = token.permissoes.map(function (value) {
          return value.toLowerCase();
        });
        retorno = lowerPermissoes.indexOf(permissao.toLowerCase()) >= 0;
      }
      if (typeof (token.permissoes) === 'string') {
        retorno = token.permissoes.toLowerCase() == permissao.toLowerCase();
      }
    }
    return retorno;
  }
}
