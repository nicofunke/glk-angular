import { Component } from "@angular/core";
import { MobileService } from "./services/mobile.service";
import { TopImgComponent } from "./components/top-img/top-img.component";
import { Router, RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {

  onResize(event) {
    this.mobileService.updateState();
  }

  constructor(public mobileService: MobileService,) {

  }

  /**
   * For router animations
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
}
