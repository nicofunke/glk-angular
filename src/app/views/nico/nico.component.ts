import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
import { MobileService } from 'src/app/services/mobile.service';
import { Router } from '@angular/router';
import { ContactLinks } from 'src/app/interfaces/contact-links.interface';

@Component({
  selector: 'app-nico',
  templateUrl: './nico.component.html',
  styleUrls: ['./nico.component.scss']
})
export class NicoComponent implements OnInit {

  constructor(  private concertService: ConcertService,
    public mobileService: MobileService,
    public router: Router ) { }

  public contactLinks: ContactLinks ={
    facebook: "https://www.facebook.com/nico.funke.12",
    linkedin: "https://de.linkedin.com/in/nicofunke",
    mail: "nico.funke@stud.uni-goettingen.de",
    instagram: "https://www.instagram.com/picofiete/"
  }

  ngOnInit() {
  }

}
