import { Injectable, inject } from '@angular/core';
import { AUTH } from './app.config';

@Injectable()
export class TokenService {
  auth = inject(AUTH)
  private token!: string

  constructor() { 
    this.auth.currentUser?.getIdToken().then( (token) => {
      this.token = token;
      localStorage.setItem('token', token);    
    })   
  }

  getToken(): string {
    if (this.token == undefined || this.token == '')
    this.auth.currentUser?.getIdToken().then( (token) => {
      this.token = token;
      localStorage.setItem('token', token);    
    })   
    return this.token;
  }

}
