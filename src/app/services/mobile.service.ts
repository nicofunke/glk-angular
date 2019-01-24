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

  /**
   * Updates the state dependent on the current window.innerWidth
   */
  public updateState(): void  {
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
  }
}
