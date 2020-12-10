import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, Observable } from 'rxjs';

export interface ITokenState {
  token: any
}


@Injectable()

export class UserTokenService {
  private _tokenSubject = new Subject<ITokenState>();
  tokenState = <Observable<ITokenState>>this._tokenSubject;
  private jwtHelper = new JwtHelperService();
  public constructor() { }
    public getTokenValue(): string {
        var value: string = sessionStorage.getItem('id_token');
     
        if (value && !this.jwtHelper.isTokenExpired(value)) {
            return value;
        }
        return null;
    }

    public setTokenValue(value: string): void {
      sessionStorage.setItem('id_token', value);
      this._tokenSubject.next(<ITokenState>{ token: value });
    }

    public getTokenObject(): any {
       
        var value = this.getTokenValue();
        if (value && !this.jwtHelper.isTokenExpired(value)) {
            return this.jwtHelper.decodeToken(this.getTokenValue());
        }
        return null;
    }
}
