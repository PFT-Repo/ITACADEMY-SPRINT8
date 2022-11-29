import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post(this.URL + '/signup', user);
  }
  signIn(user: any) {
    return this.http.post(this.URL + '/signin', user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
}