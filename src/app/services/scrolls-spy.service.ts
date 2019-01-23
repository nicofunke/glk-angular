import { Injectable, HostListener } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ScrollsSpyService {

  public yScrollPosition = 0;

@HostListener("window:scroll", ["$event"])
  doSomething(event) {
    console.log("Scroll Event", window.pageYOffset );
    this.yScrollPosition = window.pageYOffset;
}

  constructor() { }
}
