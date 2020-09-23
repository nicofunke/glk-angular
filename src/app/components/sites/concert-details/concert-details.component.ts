import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, mergeMap, tap } from 'rxjs/operators';
import { ConcertService } from 'src/app/services/concert.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { Concert } from '../../../interfaces/concert.interface';
import * as moment from "moment";
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { faCalendarAlt, faCross, faMapMarkerAlt, faPen, faPenAlt, faPlus, faReceipt, faSave, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-concert-details',
  templateUrl: './concert-details.component.html',
  styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit, OnChanges {

  // Font awesome icons
  facalendar = faCalendarAlt
  falocation = faMapMarkerAlt
  fafacebook = faFacebookSquare
  faticket = faReceipt
  faedit = faPen
  fasave = faSave
  faabort = faTimes
  fadelete = faTrashAlt
  fanew = faPlus
  

  public concert: Concert;
  public concertBackup: Concert;
  public formattedDate: string;
  public editMode = false;
  public concertLoaded = false; // To check if not loaded or 404

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
      tap(() => this.concertLoaded = false),
      mergeMap(id =>
        this.concertService
          .getConcertDetails(id)
          .pipe(tap(concert => this.updateVariables(concert)))
      )
    )
    .subscribe();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public concertService: ConcertService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  ngOnChanges(): void {
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
    this.router.navigate(['/concerts']);
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
    if(!concert){
      this.concert = undefined
      this.concertBackup = undefined
      this.formattedDate = undefined
      this.concertLoaded = true
      return
    }
    this.concert = JSON.parse(JSON.stringify(concert));
    this.concertBackup = JSON.parse(JSON.stringify(concert));
    this.formattedDate = moment(concert.date).format("DD.MM.YYYY");
    this.concertLoaded = true
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
    return environment.backendImgURL + picture;
  }
}