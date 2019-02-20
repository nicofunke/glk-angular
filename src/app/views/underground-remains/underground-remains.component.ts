import { Component, OnInit } from "@angular/core";
import { ConcertService } from "../../services/concert.service";
import { MobileService } from "../../services/mobile.service";
import { Router } from "@angular/router";

@Component({
  selector: "glk-underground-remains",
  templateUrl: "./underground-remains.component.html",
  styleUrls: ["./underground-remains.component.scss"]
})
export class UndergroundRemainsComponent implements OnInit {

  constructor(  private concertService: ConcertService,
                public mobileService: MobileService,
                public router: Router ) { }

  public nextConcerts$ = this.concertService.getNextConcerts();

  ngOnInit() {
  }

}
