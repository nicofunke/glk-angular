import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // fontawesome icons
  famenu = faBars

  // Behavioursubject to define if the navbar is currently fixed or static
  isFixed$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  // Scroll-listener that defines if the navbar is currently fixed
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (window.pageYOffset > 200) {
      this.isFixed$.next(true)
    } else {
      this.isFixed$.next(false)
    }
  }

  // Hotfix for collapse toggle
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
