import { Injectable } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiUrl} from '../../app.constant';

@Injectable()
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient,private route:Router) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{access_token: string;success:boolean}>(ApiUrl + 'auth/login', {email: email, password: password})
      .pipe(
        map((result:any) => {
          if(result.status){
            localStorage.setItem('access_token', result.access_token);
          }
          return result;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  register(user: any): Observable<any>{
    console.log('data',user);
    return this.http.post<{status: boolean}>(ApiUrl + 'auth/register',user)
    .pipe(
      map(result => {

          return result;

      })
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  getUserProfile(id): Observable<any> {
    let api = `${ApiUrl}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

