import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Renderer2, OnChanges } from "@angular/core";
import { ScrollsSpyService } from "../../services/scrolls-spy.service";
import { Observable } from "rxjs";
import { style } from "@angular/animations";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "glk-top-img",
  templateUrl: "./top-img.component.html",
  styleUrls: ["./top-img.component.scss"]
})
export class TopImgComponent implements OnInit, OnChanges {

  @Input() titleText: string;
  @Input() content: string;

  public isVideo: boolean;

  /**
   * Change the title"s padding depending on the scroll position
   */
  public titlePaddingBottom = 100;
  @ViewChild("imgTitle") titleElement: ElementRef;
  @HostListener("window:scroll", ["$event"])
    onWindowScroll(event) {
      this.rd.setStyle(this.titleElement.nativeElement, "padding-bottom",
                        this.titlePaddingBottom - window.pageYOffset / 5 + "px");
  }

  constructor(private rd: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Detects whether content is image or webm on changes
   */
  ngOnChanges(): void {
    this.isVideo = !! this.content.endsWith(".webm");
  }
}
