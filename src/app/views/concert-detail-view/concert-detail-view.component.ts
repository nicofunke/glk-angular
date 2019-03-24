import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Concert } from "../../interfaces/concert.interface";
import { ConcertService } from "../../services/concert.service";
import {
  tap,
  map,
  mergeMap,
  filter,
  distinctUntilChanged
} from "rxjs/operators";
import * as moment from "moment";

@Component({
  selector: "glk-concert-detail-view",
  templateUrl: "./concert-detail-view.component.html",
  styleUrls: ["./concert-detail-view.component.scss"]
})
export class ConcertDetailViewComponent implements OnInit, OnChanges {
  public concert: Concert;
  public concertBackup: Concert;
  public formattedDate: string;
  public editMode = false;

  /**
   * Observable for the id from route
   */
  concertIdFromRoute$ = this.route.params.pipe(
    filter(params => !!params["id"]),
    map(params => +params["id"]),
    distinctUntilChanged()
  );

  /**
   * Subscrition to the concertservice, that calls method to set components variables
   */
  concertSubscription = this.concertIdFromRoute$
    .pipe(
      mergeMap(id =>
        this.concertService
          .getConcertDetails(id)
          .pipe(tap(concert => this.updateVariables(concert)))
      )
    )
    .subscribe();

  constructor(
    private route: ActivatedRoute,
    public concertService: ConcertService
  ) {}

  ngOnInit() {}

  ngOnChanges(): void {
    console.log("changes");
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
    this.concertService.deleteConcert(this.concert.id);
  }

  /**
   * Sets the current concert to a new one and starts edit mode
   */
  createNewConcert() {
    this.editMode = true;
    this.concert = this.concertService.getConcertTemplate();
  }

  /**
   * Gets called when a new picture is chosen. Reads it as base64 to the current concert
   * @param event     input even
   */
  changePicture(event): void {
    const myReader: FileReader = new FileReader();
    myReader.onloadend = () => {
      this.concert.picture = myReader.result.toString();
    };
    myReader.readAsDataURL(event.target.files[0]);
  }

  /**
   * Updates the components variables dependent on the given concert
   * @param concert     concert to get the values from
   */
  updateVariables(concert: Concert): void {
    this.concert = JSON.parse(JSON.stringify(concert));
    this.concertBackup = JSON.parse(JSON.stringify(concert));
    this.formattedDate = moment(concert.date).format("DD.MM.YYYY");
  }

  /**
   * Opens the given link in a new tab
   * @param link    link to open
   */
  openLink(link: string) {
    window.open(link, "_blank");
  }

  /**
   * Converts a picture string to a valid HTML src attribute
   * @param picture   base64 image or backend link image
   * @return src attribute to display in HTMl
   */
  pictureToSrcAttribute(picture: string): string {
    if (!picture) {
      return "";
    } else if (picture.match(/data:image.*/gm)) {
      return picture;
    }
    return this.concertService.URL_BACKEND + picture;
  }
}
