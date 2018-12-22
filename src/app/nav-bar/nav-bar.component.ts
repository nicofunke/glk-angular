import { Component, OnInit } from "@angular/core";
import { MobileService } from "../mobile.service";

@Component({
  selector: "glk-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {

  constructor(public mobileService: MobileService) { }

  ngOnInit() {
  }

}
