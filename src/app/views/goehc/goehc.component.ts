import { ContactLinks } from "src/app/interfaces/contact-links.interface";
import { Component, OnInit } from "@angular/core";
import { ConcertService } from "../../services/concert.service";
import { MobileService } from "../../services/mobile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-goehc',
  templateUrl: './goehc.component.html',
  styleUrls: ['./goehc.component.scss']
})
export class GoehcComponent implements OnInit {

  constructor(  private concertService: ConcertService,
                public mobileService: MobileService,
                public router: Router ) { }

    public nextConcerts$ = this.concertService.getNextConcerts();

    public contactLinks: ContactLinks ={
      facebook: "https://www.facebook.com/GoettingenHC/",
      mail: "goettingenhc@gmail.com",
      youtube: "https://www.youtube.com/channel/UCnTfPXbl6GFfBR5w_n1g_Zg"
    }

    ngOnInit() {
    }


}
