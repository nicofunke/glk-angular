import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Concert } from "../interfaces/concert.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class ConcertService {

  /**
   * Backend URLs
   */
  public URL_BACKEND = "http://localhost/glk_backend/";
  public PATH_NEXT_CONCERTS = "getNextConcerts";
  public PATH_SINGLE_CONCERT = "getConcert";

  /**
   * HttpOptions for post requests
   */
  httpOptions = {
      headers:
          new HttpHeaders (
          {
              "Content-Type": "application/x-www-form-urlencoded"
          }),
  };

  private nextConcerts: Concert[];

  constructor(private http: HttpClient) { }

  /**
   * Returns an observable with all next concerts from the backend
   */
  getNextConcerts(): Observable<Concert[]> {
    return !! this.nextConcerts ? of(this.nextConcerts)
            : this.http.get<Concert[]>( this.URL_BACKEND + this.PATH_NEXT_CONCERTS ).pipe(
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
         this.http.post<Concert>(this.URL_BACKEND + this.PATH_SINGLE_CONCERT ,
            {id: id}, this.httpOptions ).pipe(

            catchError( err => of(undefined))
         );
  }

  /**
   * Sends request to backend to save a concert (edit old one/create new one, dependent on th id)
   * @param concert new or edited concert object
   * @return    boolean, if saved successfully
   */
  saveConcert(concert: Concert): Observable<boolean> {
    console.log("Saving:");
    console.log(concert);
    return of(true);
  }

  /**
   * Sends request to backend to delte a concert
   * @param concertId   id of the concert to delete
   * @return            boolean, if deleted successfully
   */
  deleteConcert(concertId: string): Observable<boolean> {
    console.log("deleting" + concertId);
    return of(true);
  }

  getConcertTemplate(): Concert {
    return {
      description: "Hier könnte Ihre Konzertbeschreibung stehen",
      bands: "Coole Band 1, coole Band 2 und Anhang",
      date: "01.01.2000",
      place: "Club Göttingen",
      doors: "12:00",
      begin: "12:00",
      fblink: "",
      buylink: "",
      picture: ""
    };
  }
}
