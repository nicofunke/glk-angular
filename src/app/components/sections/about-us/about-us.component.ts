import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  // Set variables for fontawesome icons
  faEnvelope = faEnvelope;
  fafacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;


  constructor() { }

  ngOnInit() {
  }

}
