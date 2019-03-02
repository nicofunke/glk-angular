import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Concert } from "../../interfaces/concert.interface";
import { ConcertService } from "../../services/concert.service";
import { tap, map, mergeMap, filter, distinctUntilChanged } from "rxjs/operators";
import * as moment from "moment";

@Component({
  selector: "glk-concert-details",
  templateUrl: "./concert-details.component.html",
  styleUrls: ["./concert-details.component.scss"]
})
export class ConcertDetailsComponent implements OnInit {

  /**
   * Variables
   */
  public concert: Concert;
  public imageLink: string;
  public formattedDate: string;

  /**
   * Observable for the id from route
   */
  concertIdFromRoute$ = this.route.params.pipe(
    filter( params => !!params["id"]),
    map( params => +params["id"]),
    distinctUntilChanged()
  );

  /**
   * Subscrition to the concertservice, that calls method to set components variables
   */
  concertSubscription = this.concertIdFromRoute$.pipe(
    mergeMap( id => this.concertService.getConcertDetails( id ).pipe(
      tap( concert =>  this.updateVariables( concert ) )
    ) ),
  ).subscribe();

  constructor( private route: ActivatedRoute,
              public concertService: ConcertService ) { }

  ngOnInit() {
  }

  /**
   * Updates the components variables dependent on the given concert
   * @param concert     concert to get the values from
   */
  updateVariables( concert: Concert): void {
    this.concert = concert;
    this.imageLink = this.concertService.URL_BACKEND + concert.picture;
    this.formattedDate = moment( concert.date).format("DD.MM.YYYY");
  }

}
