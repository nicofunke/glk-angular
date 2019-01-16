import { Component, OnInit } from "@angular/core";
import { ConcertService } from "../../services/concert.service";

@Component({
  selector: "glk-underground-remains",
  templateUrl: "./underground-remains.component.html",
  styleUrls: ["./underground-remains.component.scss"]
})
export class UndergroundRemainsComponent implements OnInit {

  constructor(private concertService: ConcertService) { }

  public nextConcerts$ = this.concertService.getNextConcerts();

  ngOnInit() {
  }

}
