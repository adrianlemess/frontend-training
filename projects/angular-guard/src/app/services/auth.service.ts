import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedUser: any;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return 'czZCaGRSa3F0MzpnWDFmQmF0M2JW';
  }

  private setAuthenticatedUser(user) {
    this.authenticatedUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAuthenticatedUser() {
    return this.authenticatedUser || JSON.parse(localStorage.getItem('user')) || null;
  }

  getUser(username: string): Observable<User> {
    const params = new HttpParams()
      .append('username', username);
    return this.http.get<User>('http://localhost:3000/users', { params })
      .pipe(
        map((users) => {
          return users && users[0] || null;
        }),
        tap((user) => {
          console.log(user);
          if (user) {
            this.setAuthenticatedUser(user);
          }
      }));
  }
}
