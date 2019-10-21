import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { of, BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class UserService {

  /**
   * Backend URLs
   */
  public PATH_AUTHENTICATE = "authenticate";
  public PATH_LOGIN = "login";
  public PATH_LOGOUT = "logout";

  public username$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  /**
   * HttpOptions for post requests
   */
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    withCredentials: true
  };

  /**
   * Sends the login data to backend and changes the username if successful
   * @param username    username
   * @param password    matching password
   */
  sendLoginData(username: string, password: string): void {
    const postBody = {user: username, password: password };
    this.http.post<{username: string}>( environment.backendURL + this.PATH_LOGIN, postBody, this.httpOptions )
      .pipe(
        map( response => !!response ? response.username : undefined),
        catchError( err => of(undefined)),
        tap( user => {
          if ( !! user) {
            this.username$.next(user);
            // TODO: Toasts
            // console.log("Anmeldung erfolgreich!");
          } else {
            // console.log("Anmeldung fehlgeschlagen!");
          }
        })
      ).subscribe();
  }

  /**
   * Sends a request to backend to get authenticationdata from session
   */
  checkAuthentication(): void {
    this.http.get<{username: string}>( environment.backendURL + this.PATH_AUTHENTICATE, this.httpOptions)
      .pipe(
        map( response => !!response ? response.username : undefined),
        catchError( err => of(undefined)),
        tap( user => {
          if ( !! user) {
            this.username$.next(user);
            // TODO: Toasts
            // console.log("Authentifizierung gefunden!")
          } else {
            // console.log("Authentifizierung fehlgeschlagen!");
          }
        })
      ).subscribe();
  }

  logout(): void {
    this.http.get<{username: string}>( environment.backendURL + this.PATH_LOGOUT, this.httpOptions)
    .pipe(
      catchError( err => of(undefined)),
      tap( response => {
        if ( !! response) {
          // TODO: Toasts
          // console.log("Logout erfolgreich!");
          this.username$.next(undefined);
        } else {
          // console.log("Logout fehlgeschlagen!");
        }
      })
    ).subscribe();

  }

  constructor(private http: HttpClient) {
  }
}
