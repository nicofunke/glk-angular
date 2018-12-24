import { Injectable } from "@angular/core";
import { HostListener } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MobileService {

  public isMobile = false;
  private mobileBreakpoint = 840;

  constructor() {
    this.updateState();
  }

  public updateState(): void  {
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
  }
}
