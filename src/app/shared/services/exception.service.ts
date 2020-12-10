import { Injectable } from '@angular/core';
//import { Response } from '@angular/http';
import { Observable } from 'rxjs';

import { ToastService } from 'local/shared/toast/toast.service';
import { HttpError } from 'local/shared/models/httperror';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ExceptionService {

    constructor(
        private _toastService: ToastService
    ) {
    }

    catchBadResponse: (errorResponse: HttpErrorResponse) => void = (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        var httperror = <HttpError>errorResponse.error;
        for (let state in httperror.errors) {
            if (httperror.errors[state]) {
                for (let message of httperror.errors[state]) {
                    this._toastService.error('Ocorreu um erro.', message);
                }
            }
        }
        return;// Observable.throw(errorResponse);
    }
}

