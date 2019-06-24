import { Component, OnInit, Input } from "@angular/core";
import { ConcertService } from "../../services/concert.service";
import { Concert } from "../../interfaces/concert.interface";
import * as moment from "moment";
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: "glk-concert-thumbnails",
  templateUrl: "./concert-thumbnails.component.html",
  styleUrls: ["./concert-thumbnails.component.scss"]
})
export class ConcertThumbnailsComponent implements OnInit {

  constructor( public concertService: ConcertService,
               public mobileService: MobileService) { }

  @Input() concerts: Concert[];

  ngOnInit() {
  }

  /**
   * Reformats a datestring from YYYY-MM-DD to DD.MM.YYYY
   * @param inputDateString datestring as YYYY-MM-DD
   */
  public formatDateString( inputDateString: string): string {
    const inputDateMoment = moment(inputDateString, "YYYY-MM-DD");
    return inputDateMoment.format("DD.MM.YYYY");
  }
}
