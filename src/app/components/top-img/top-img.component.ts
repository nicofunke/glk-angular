import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "glk-top-img",
  templateUrl: "./top-img.component.html",
  styleUrls: ["./top-img.component.scss"]
})
export class TopImgComponent implements OnInit {

  @Input() title: string;
  @Input() picture: string;

  constructor() { }

  ngOnInit() {
  }
}
