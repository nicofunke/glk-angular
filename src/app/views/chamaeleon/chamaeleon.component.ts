import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
import { MobileService } from 'src/app/services/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamaeleon',
  templateUrl: './chamaeleon.component.html',
  styleUrls: ['./chamaeleon.component.scss']
})
export class ChamaeleonComponent implements OnInit {

  constructor(  private concertService: ConcertService,
    public mobileService: MobileService,
    public router: Router ) { }

public nextConcerts$ = this.concertService.getNextConcerts();

  ngOnInit() {
  }

}
