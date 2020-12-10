import { Injectable } from '@angular/core';
// import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { ExceptionService } from './exception.service';


@Injectable()
export class HttpDefaultParametersInterceptor implements HttpInterceptor {
  constructor(private exceptionService: ExceptionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {



    let headers;

    if (req.url.indexOf('Upload') > 0) {
      headers = req.headers;
    } else {
      headers = req.headers.set('Content-Type', 'application/json');
    }

    const cloneReq = req.clone({ headers });

    return next.handle(cloneReq);
  }
}
