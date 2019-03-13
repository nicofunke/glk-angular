import { Component, OnInit, OnChanges, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Concert } from "../../interfaces/concert.interface";
import { ConcertService } from "../../services/concert.service";
import { tap, map, mergeMap, filter, distinctUntilChanged } from "rxjs/operators";
import * as moment from "moment";

@Component({
  selector: "glk-concert-detail-view",
  templateUrl: "./concert-detail-view.component.html",
  styleUrls: ["./concert-detail-view.component.scss"]
})
export class ConcertDetailViewComponent implements OnInit {

  /**
   * Variables
   */
  public concert: Concert;
  public imageLink: string;
  public formattedDate: string;

  /**
   * ViewChilds to read elements content
   */

  @ViewChild("date") divDate: ElementRef;
  @ViewChild("place") divPlace: ElementRef;
  @ViewChild("doors") divDoors: ElementRef;
  @ViewChild("begin") divBegin: ElementRef;
  @ViewChild("bands") divBands: ElementRef;
  @ViewChild("fbLink") divFbLink: ElementRef;
  @ViewChild("buyLink") divBuyLink: ElementRef;
  @ViewChild("description") divDescription: ElementRef;

  // boolean, if the concert is currently editable
  public editMode = false;

  test() {
    // console.log(this.concert);
    console.log(this.divBands.nativeElement.innerHTML);
    console.log(this.divDate.nativeElement.innerHTML);
    console.log(this.divPlace.nativeElement.innerHTML);
    console.log(this.divDoors.nativeElement.innerHTML);
    console.log(this.divBegin.nativeElement.innerHTML);
    console.log(this.divDescription.nativeElement.innerHTML);
    console.log(this.divFbLink.nativeElement.innerHTML);
    console.log(this.divBuyLink.nativeElement.innerHTML);
  }

  // TODO: Logic
  saveChanges() {
    this.editMode = false;
    console.log("Saving");
  }

  reloadSite() {
    this.editMode = false;
    console.log("Reloading");
  }

  deleteConcert() {
    console.log("deleting");
  }

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

  /**
   * Opens the given link in a new tab
   * @param link    link to open
   */
  openLink( link: string) {
    window.open(link, "_blank");
  }
}
