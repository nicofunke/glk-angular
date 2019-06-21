import { Component, OnInit } from '@angular/core';
import { ConcertService } from 'src/app/services/concert.service';
import { MobileService } from 'src/app/services/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor(  private concertService: ConcertService,
    public mobileService: MobileService,
    public router: Router ) { }

  ngOnInit() {
  }

}
