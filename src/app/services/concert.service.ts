import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Concert } from "../interfaces/concert.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConcertService {

  public URL_BACKEND = "http://localhost/glk_backend/";
  public PATH_NEXT_CONCERTS = "getNextConcerts.php";

  constructor(private http: HttpClient) { }

  /**
   * Returns an observable with all next concerts from the backend
   */
  getNextConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>( this.URL_BACKEND + this.PATH_NEXT_CONCERTS );
  }

}
