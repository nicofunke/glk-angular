import { Component, OnInit, HostListener } from "@angular/core";
import { MobileService } from "../../services/mobile.service";
import { Router } from "@angular/router";

@Component({
  selector: "glk-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {


  /**
   * Set Transparency depending on the scroll position
   */
  public transparent = true;
  @HostListener("window:scroll", ["$event"])
    doSomething(event) {
      this.transparent =  window.pageYOffset < 350;
  }

  constructor(public mobileService: MobileService,
              public router: Router) { }

  ngOnInit() {
  }

}
