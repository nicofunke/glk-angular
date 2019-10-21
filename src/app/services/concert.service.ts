import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Concert } from "../interfaces/concert.interface";
import { Observable, of } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})

export class ConcertService {

  /**
   * Backend Paths
   */
  public PATH_NEXT_CONCERTS = "getNextConcerts";
  public PATH_SINGLE_CONCERT = "getConcert";
  public PATH_SAVE_CONCERT = "saveConcert";
  public PATH_DELETE_CONCERT = "deleteConcert";

  /**
   * HttpOptions for post requests
   */
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    withCredentials: true
  };

  private nextConcerts: Concert[];

  constructor(private http: HttpClient) { }

  /**
   * Returns an observable with all next concerts from the backend
   */
  getNextConcerts(): Observable<Concert[]> {
    return !! this.nextConcerts ? of(this.nextConcerts)
            : this.http.get<Concert[]>( environment.backendURL + this.PATH_NEXT_CONCERTS ).pipe(
              tap( concerts => this.nextConcerts = concerts),
              catchError( err => of(undefined))
            );
  }

  /**
   * Returns an observable with detailed information of a specific concert
   * @param id  id of the concert
   */
  getConcertDetails( id: number): Observable<Concert> {
    const outputConcert: Concert = this.nextConcerts ?
          this.nextConcerts.find( concert => concert.id === id.toString() ) : undefined;

    // TODO: look in previousConcerts
    return outputConcert ? of(outputConcert) :
         this.http.post<Concert>(environment.backendURL + this.PATH_SINGLE_CONCERT ,
            {id: id}, this.httpOptions ).pipe(
            catchError( err => of(undefined))
         );
  }

  /**
   * Sends request to backend to save a concert (edit old one/create new one, dependent on th id)
   * @param concert new or edited concert object
   * @return    boolean, if saved successfully
   */
  saveConcert(concert: Concert): void {
    this.http.post(environment.backendURL + this.PATH_SAVE_CONCERT, concert, this.httpOptions).pipe(
      // TODO: Add Toasts
      // tap( x => console.log("Gespeichert!, x")),
      catchError( err => {console.log("Error: Speichern des Konzerts fehlgechlagen"); return of(undefined); })
    ).subscribe();
  }

  /**
   * Sends request to backend to delete a concert
   * @param concertId   id of the concert to delete
   * @return            boolean, if deleted successfully
   */
  deleteConcert(concertId: string): void {
    this.http.post(environment.backendURL + this.PATH_DELETE_CONCERT, {id: concertId}, this.httpOptions).pipe(
      // TODO: Add Toasts
      // tap( x => console.log("Gespeichert!, x")),
      catchError( err => {console.log("Error: Speichern des Konzerts fehlgechlagen"); return of(undefined); })
    ).subscribe();
  }

  /**
   * Returns an concert demo template
   * @return    concert object filled with demo values
   */
  getConcertTemplate(): Concert {
    return {
      description: "Hier könnte Ihre Konzertbeschreibung stehen",
      bands: "Coole Band 1, coole Band 2 und Anhang",
      date: "2019-01-01",
      place: "Club Göttingen",
      doors: "12:00",
      begin: "12:00",
      fblink: "",
      buylink: "",
      picture: ""
    };
  }
}
