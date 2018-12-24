import { Component } from "@angular/core";
import { MobileService } from "./services/mobile.service";
import { TopImgComponent } from './components/top-img/top-img.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {

  onResize(event) {
    this.mobileService.updateState();
  }

  constructor(public mobileService: MobileService) { }

}
