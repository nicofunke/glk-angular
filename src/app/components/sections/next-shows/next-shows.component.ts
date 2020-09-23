import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../../services/concert.service';
import { Observable } from 'rxjs';
import { Concert } from 'src/app/interfaces/concert.interface';
import { faAngleDoubleRight, faCalendarAlt, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-next-shows',
  templateUrl: './next-shows.component.html',
  styleUrls: ['./next-shows.component.scss']
})
export class NextShowsComponent implements OnInit {

  // Observable wth information about next concerts (gets initialized in constructor)
  nextConcerts$: Observable<Concert[]> = this.concertService.getNextConcerts()

  // Observable that holds a boolean if concerts were already loaded but no concert exists
  noConcertsAvailable$ = this.nextConcerts$.pipe(
    map( concerts => !(typeof concerts !== 'undefined'  && concerts.length > 0))
  )

  // Font awesome icons
  facalendaralt = faCalendarAlt
  fafacebook = faFacebookSquare;
  faTicket = faReceipt;
  faangleright = faAngleDoubleRight;

  constructor(public concertService: ConcertService) { }

  ngOnInit() {
  }

  getImageLink(imageName: string): string {
    return environment.backendImgURL + (imageName)
  }

}
