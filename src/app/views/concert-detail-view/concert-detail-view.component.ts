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
  public concertBackup: Concert;
  public imageLink: string;
  public formattedDate: string;

  /**
   * ViewChilds to read elements content, that may been changed
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

  /**
   * Calls the service to save the changes and stops edit mode
   */
  saveChanges() {
    this.editMode = false;
    this.concertService.saveConcert(this.concert);
  }

  /**
   * Stops the edit mode and resets the current shown concert
   */
  cancelEdit(): void {
    this.editMode = false;
    this.updateVariables(this.concertBackup);

  }

  /**
   * Calls the service to delete the current concert
   */
  deleteConcert() {
    this.concertService.deleteConcert( this.concert.id );
  }

  createNewConcert() {
    this.editMode = true;
    this.concert = this.concertService.getConcertTemplate();
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
    this.concert =  (JSON.parse(JSON.stringify(concert)));
    this.concertBackup = (JSON.parse(JSON.stringify(concert)));
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
