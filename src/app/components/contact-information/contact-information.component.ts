import { Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile.service";

@Component({
  selector: "glk-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"]
})
export class ContactInformationComponent implements OnInit {

  constructor(private mobileService: MobileService) { }

  ngOnInit() {
  }

}
