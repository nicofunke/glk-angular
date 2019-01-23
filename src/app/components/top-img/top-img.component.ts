import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { ScrollsSpyService } from "../../services/scrolls-spy.service";
import { Observable } from "rxjs";
import { style } from "@angular/animations";

@Component({
  selector: "glk-top-img",
  templateUrl: "./top-img.component.html",
  styleUrls: ["./top-img.component.scss"]
})
export class TopImgComponent implements OnInit {

  @Input() title: string;
  @Input() picture: string;

  /**
   * Change the title's padding depending on the scroll position
   */
  @ViewChild("imgTitle") titleElement: ElementRef;
  public titlePaddingBottom = 100;
  @HostListener("window:scroll", ["$event"])
    onWindowScroll(event) {
      this.rd.setStyle(this.titleElement.nativeElement, "padding-bottom",
                        this.titlePaddingBottom - window.pageYOffset / 5 + "px");
  }

  constructor(private rd: Renderer2) { }

  ngOnInit() {
  }
}
