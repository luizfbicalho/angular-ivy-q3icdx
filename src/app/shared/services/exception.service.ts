import { Injectable } from '@angular/core';
//import { Response } from '@angular/http';
import { Observable } from 'rxjs';



import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpError } from '../models/httperror';

@Injectable()
export class ExceptionService {

    constructor(

    ) {
    }

    catchBadResponse: (errorResponse: HttpErrorResponse) => void = (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        var httperror = <HttpError>errorResponse.error;
        for (let state in httperror.errors) {
            if (httperror.errors[state]) {
                for (let message of httperror.errors[state]) {
                    
                }
            }
        }
        return;// Observable.throw(errorResponse);
    }
}

