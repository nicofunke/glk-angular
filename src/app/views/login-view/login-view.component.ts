import { Component, OnInit } from "@angular/core";
import { MobileService } from "src/app/services/mobile.service";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"]
})
export class LoginViewComponent implements OnInit {

  username: string;
  password: string;

  constructor(public mobileService: MobileService) { }

  ngOnInit() {
  }

  /**
   * Emits the input values to the service to log in
   */
  submitInput(): void {
    console.log("username: " + this.username + " Password: " + this.password);
  }

}
