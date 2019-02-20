import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Concert } from "../../interfaces/concert.interface";
import { ConcertService } from "../../services/concert.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "glk-concert-details",
  templateUrl: "./concert-details.component.html",
  styleUrls: ["./concert-details.component.scss"]
})
export class ConcertDetailsComponent implements OnInit {

  public id: number;
  public concert: Concert;

  constructor( private route: ActivatedRoute,
              public concertService: ConcertService ) { }

  /**
   * Function that gets called on init and starts to subscribe the route params and fetch the right concert
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.concertService.getConcertDetails( this.id).pipe(
        tap( concert => this.concert = concert),
      ).subscribe();
   });
  }

}
