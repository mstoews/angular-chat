import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';


export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('interceptor authentification ... ')
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();


  if (req.url.indexOf('oauthCallback') > -1 ) { 
    return next(req) 
  }

  console.log('Auth token :', token);

  req = req.clone({
            setHeaders: {
            Authorization: `Bearer ${token}`
            }
        });

  return next(req)
};
