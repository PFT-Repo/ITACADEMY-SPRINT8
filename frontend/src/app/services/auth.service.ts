import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient, private rou:Router ){ }

  signUp(user: any) {
    return this.http.post(this.URL + '/signup', user);
  }
  signIn(user: any) {
    return this.http.post(this.URL + '/signin', user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.rou.navigate(['/signin'])
  }
}
