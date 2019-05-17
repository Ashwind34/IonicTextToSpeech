import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceProvider {

  userUrl: string = 'http://localhost:3000/api/appUsers'

  isLoggedIn: boolean = false;

  token;

  user: any = {
    email: '',
    password: ''
  }

  constructor(public http: HttpClient) {}

  register() {
    return this.http.post(this.userUrl, this.user)
  }

  login() {
    return this.http.post(this.userUrl + '/login/', this.user)
  }

  emptyLogin() {
    this.isLoggedIn = false
    this.user = {
      username: '',
      password: ''
    }  
  }
}
