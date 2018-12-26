import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "glk-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() content: string;


  ngOnInit() {
  }

}
