
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpError } from 'local/shared/models/httperror';
import { ModelState } from 'local/shared/models/modelstate';

import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { EntidadeId } from 'local/models/entidadeid.model'
import { Menu } from 'local/models/menu.model';

import { DataSourceRequestState } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { getGridDataResult } from 'local/shared/models/griddataresult.model';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MenuLateralService {
  constructor(private $http: HttpClient,
    @Inject('ApiEndpoint') private apiEndpoint: string) { }

  public getMenuUsuario = (): Observable<Menu[]> => {
    return this.$http.get<Menu[]>(this.apiEndpoint + `api/Menu/GetMenuUsuario/`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<Menu[]>) => { return (<any>res.body).map(item => { return new Menu(item); }); }),
        catchError((error: HttpErrorResponse) => { return observableThrowError(error) })
      );
  }
}
