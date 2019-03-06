import { ContactLinks } from "src/app/interfaces/contact-links.interface";
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

  public contactLinks: ContactLinks ={
    facebook: "https://www.facebook.com/UndergroundRemainsOpenAir/?__tn__=%2Cd%2CP-R&eid=ARBj2mad19Tx0_AKQocpyi_AWAwCuEBHsuVU7m7wYfWkrbXbwK-jdgWxM-sTP1VD6XZ1MO5m6Ri3ecZO",
    website: "https://www.undergroundremains.de/?fbclid=IwAR2wjDI5eu7NYdnvLpFbaaMobEbDZP8-nz8LwSC13E9FD6Z0RUksrBaNtmo",
    mail: "undergroundremains@gmail.com"
  }

  ngOnInit() {
  }

}
