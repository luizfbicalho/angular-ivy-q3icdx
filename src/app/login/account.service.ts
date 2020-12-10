
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
// import {Observable}  from 'rxjs/Observable';
// import { RegisterBindingModel } from "local/models/account.models";
// import {LoginData} from "local/models/account.models";
// import model  from "local/models/account.models";
// import {Ticket} from "local/models/autorizacao.model";

import { ExceptionService } from 'local/shared/services/exception.service';
import { SpinnerService } from 'local/shared/spinner/spinner';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserTokenService } from 'local/shared/services/user.token.service';
import { Token } from 'local/shared/models/token';

@Injectable()
export class AccountService {
	constructor(
		private $http: HttpClient,
		private _spinnerService: SpinnerService,
		private _exceptionService: ExceptionService,
		@Inject('ApiEndpoint') private apiEndpoint: string,
		private _userTokenService: UserTokenService
	) {}
	public token = (): Observable<Token> => {
      return this.$http.post<Token>(this.apiEndpoint + `api/Login/PostIntegrated`, {}, { withCredentials: true });
	};

	public adUser = (): Observable<void> => {
		return this.$http.get<void>(this.apiEndpoint + `api/Account/ADUser`, { withCredentials: true });
	};

	public tokenUserPwd = (userName: string, password: string) : Observable<Token> => {
      return this.$http.post<Token>(this.apiEndpoint + `api/Login`, {Login:userName, Password:password},  {observe: 'response' }).pipe(
		map((res: HttpResponse<Token>) => { return res.body }),
		catchError((error: HttpErrorResponse) => { return observableThrowError(error) }),);
	 }
}
