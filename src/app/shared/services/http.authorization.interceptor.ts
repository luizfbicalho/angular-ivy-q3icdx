import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { UserTokenService } from './user.token.service';

@Injectable()
export class HttpAuthorizationInterceptor implements HttpInterceptor {
  constructor(private userTokenService: UserTokenService) { }
  private headerName: string = 'Authorization';
  private authorizationType: string = 'Bearer';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let token = this.userTokenService.getTokenValue();
   let headers = req.headers;
    if (token && token != "") {
      if (req.url.toLowerCase().indexOf('/api/login') > 0
        || !req.url.toLowerCase().startsWith('http')
        || req.url.toLowerCase().startsWith(location.origin.toLowerCase())) {
      }
      else {
        headers = req.headers.set(this.headerName, this.authorizationType + ' ' + token);
      }
    }
    const cloneReq = req.clone({ headers });
    return next.handle(cloneReq);
  }
}
