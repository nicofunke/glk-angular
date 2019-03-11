import { Component } from "@angular/core";
import { MobileService } from "./services/mobile.service";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";
import { UserService } from "./services/user.service";

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

  constructor(public mobileService: MobileService,
    public userService: UserService) {

      this.userService.checkAuthentication();
  }

  /**
   * For router animations
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
}
