
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AcessoViewModel } from 'local/viewmodels/acessoviewmodel.model';
import { EntidadeId } from 'local/models/entidadeid.model';


import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AcessoService {
	constructor(private $http: HttpClient, @Inject('ApiEndpoint') private apiEndpoint: string) {}

	public postAcesso = (acessoVM: AcessoViewModel): Observable<AcessoViewModel> => {
		return this.$http
			.post<AcessoViewModel>(this.apiEndpoint + `api/Acesso/PostAcesso`, this.stringfyPostAcesso(acessoVM), {
				observe: 'response'
      })
      .pipe(
			  map((res: HttpResponse<AcessoViewModel>) => {
				  return new AcessoViewModel(res.body);
			  }),
			  catchError((error: HttpErrorResponse) => {
				return observableThrowError(error);
      })
    );
	};

	private stringfyPostAcesso(p: AcessoViewModel): string {
		let parameter = EntidadeId.Clone(p);
		return JSON.stringify(parameter);
	}
}
