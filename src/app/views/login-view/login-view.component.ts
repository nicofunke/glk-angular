import { Component, OnInit } from "@angular/core";
import { MobileService } from "src/app/services/mobile.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "glk-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"]
})
export class LoginViewComponent implements OnInit {

  username: string;
  password: string;

  constructor(public mobileService: MobileService,
              public userService: UserService) { }

  ngOnInit() {
  }

  /**
   * Emits the input values to the service to log in
   */
  submitInput(): void {
    this.userService.sendLoginData(this.username, this.password);
  }
}
