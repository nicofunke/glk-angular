import { Component, OnInit, HostListener, OnDestroy } from "@angular/core";
import { MobileService } from "../../services/mobile.service";
import { Router, NavigationStart } from "@angular/router";
import { filter, tap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "glk-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit, OnDestroy {

  // only mobile: If navbar is folded out
  foldedOut = false;

  // subject to stop all subscriptions
  unsubscribe: Subject<void> = new Subject();

  // fold in navbar, if route changes
  routerListener$ = this.router.events.pipe(
    takeUntil(this.unsubscribe),
    filter(event => event instanceof NavigationStart),
    tap(() => (this.foldedOut = false))
  );

  // Set Transparency depending on the scroll position
  public transparent = true;
  @HostListener("window:scroll", ["$event"])
  doSomething(event) {
    this.transparent = window.pageYOffset < 350;
  }

  constructor(public mobileService: MobileService, public router: Router) {}

  /**
   * Starts subscription to the router on init
   */
  ngOnInit() {
    this.routerListener$.subscribe();
  }

  /**
   * Stop all subscriptions on destroy
   */
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
