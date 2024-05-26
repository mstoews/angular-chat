import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';


export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('interceptor authentification ... ')
  const tokenService = inject(TokenService);
  var jwt = tokenService.getToken();
  
  localStorage.getItem('token') ? jwt = tokenService.getToken()! : jwt = '';


  if (req.url.indexOf('oauthCallback') > -1) {
    return next(req)
  }

  const baseUrl = environment.baseUrl

  if (req.url.startsWith(baseUrl)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt}`
      }
    });
    return next(req)
  }

  return next(req)
};
