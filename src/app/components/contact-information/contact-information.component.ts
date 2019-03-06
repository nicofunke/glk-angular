import { Component, OnInit, Input } from "@angular/core";
import { MobileService } from "../../services/mobile.service";
import { ContactLinks } from "src/app/interfaces/contact-links.interface";

@Component({
  selector: "glk-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"]
})
export class ContactInformationComponent implements OnInit {

  @Input()
  contactLinks: ContactLinks;

  @Input()
  profilePicture: string;

  @Input()
  name: string;

  @Input()
  summary: string;

  constructor(private mobileService: MobileService) { }

  ngOnInit() {
  }

}
