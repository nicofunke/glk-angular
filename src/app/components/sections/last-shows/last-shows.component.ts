import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Concert } from 'src/app/interfaces/concert.interface';
import { ConcertService } from 'src/app/services/concert.service';
import { environment } from 'src/environments/environment';
import { mergeMap, map, tap } from 'rxjs/operators';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-last-shows',
  templateUrl: './last-shows.component.html',
  styleUrls: ['./last-shows.component.scss']
})
export class LastShowsComponent implements OnInit {

  // font awesome icons
  famore = faCaretDown

  // Observable wth information about last concerts (gets initialized in constructor)
  lastConcerts$: Observable<Concert[]> = this.concertService.getLastConcerts()

  // Observable that holds the currently displayed concerts
  displayedConcerts$: Observable<Concert[]> = this.lastConcerts$.pipe(
    mergeMap((concerts) => this.maxConcerts$.pipe(
      map(maxConcerts => concerts.slice(0, maxConcerts))
    ))
  )

  // Observable that holds a boolean if more concerts are available to be displayed
  moreConcertsAvailable$: Observable<boolean> = this.displayedConcerts$.pipe(
    mergeMap(currentConcerts => this.lastConcerts$.pipe(
      map(allConcerts => allConcerts.length > currentConcerts.length)
    ))
  )

  // Observable that holds the number of currently displayed concerts
  maxConcerts$: BehaviorSubject<number> = new BehaviorSubject(12)

  constructor(public concertService: ConcertService) { }

  ngOnInit() {
  }

  showMoreConcerts() {
    this.maxConcerts$.next(this.maxConcerts$.value + 12)
  }

  getImageLink(imageName: string): string {
    return environment.backendImgURL + (imageName)
  }

}
