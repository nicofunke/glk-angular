import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
import { MobileService } from 'src/app/services/mobile.service';
import { Router } from '@angular/router';
import { ContactLinks } from 'src/app/interfaces/contact-links.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private concertService: ConcertService,
    public mobileService: MobileService,
    public router: Router ) { }

  public nextConcerts$ = this.concertService.getNextConcerts();

  public contactLinks: ContactLinks ={
      facebook: "https://www.facebook.com/goettingenlivekultur/",
      mail: "goettingenhc@gmail.com",
      instagram: "https://www.instagram.com/goettingen_live_kultur_e.v/"
  }

  ngOnInit() {
  }

}
