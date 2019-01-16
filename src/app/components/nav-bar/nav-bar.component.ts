import { Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile.service";
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { tap } from "rxjs/operators";

@Component({
  selector: "glk-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {

  constructor(public mobileService: MobileService,
              public router: Router) { }

  ngOnInit() {
  }

}
