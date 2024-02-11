import { Injectable, inject } from '@angular/core';
import { AUTH } from './app.config';

@Injectable()
export class TokenService {
  auth = inject(AUTH)
  private token!: string

  constructor() { 
    this.auth.currentUser?.getIdToken().then( (token) => {

      this.token = token;    
      console.log('Token interceptor :', token);            
    })   
  }

  getToken(): string {
    return this.token;
  }


}
