import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { ScrollsSpyService } from "../../services/scrolls-spy.service";
import { Observable } from "rxjs";
import { style } from "@angular/animations";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "glk-top-img",
  templateUrl: "./top-img.component.html",
  styleUrls: ["./top-img.component.scss"]
})
export class TopImgComponent implements OnInit {

  public title: string;

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

  /**
   * Starts listening to router to change the title if the route changes
   */
  ngOnInit(): void {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationStart) {
        this.updateTopImg( event.url);
      }
    });
  }

  /**
   * Updates the title, dependend on the given route
   * @param url   string    current route
   */
  private updateTopImg( url: string): void {
    if ( url.match( "/goehc" ) ) {
      this.title = "Göttingen Hardcore";
    } else if (url.match( "/cham" )) {
      this.title = "Chamäleon Gruppe";
    } else if (url.match( "/undergroundremains" )) {
      this.title = "Underground Remains";
    } else if (url.match( "/home" )) {
      this.title = "Göttingen Live Kultur e.V.";
    } else {
      this.title = "";
    }
  }
}
