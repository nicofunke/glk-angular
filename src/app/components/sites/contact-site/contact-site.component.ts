import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-site',
  templateUrl: './contact-site.component.html',
  styleUrls: ['./contact-site.component.scss']
})
export class ContactSiteComponent implements OnInit {

  // Set variables for fontawesome icons
  faEnvelope = faEnvelope;
  fafacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit() {
  }

}
