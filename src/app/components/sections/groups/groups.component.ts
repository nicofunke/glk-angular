import { Component, OnInit } from '@angular/core';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeSquare, faGlobe, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  // fontawesome icons 
  fafacebook = faFacebook
  fayoutube = faYoutube
  famail = faEnvelope
  fawebsite = faGlobe

  constructor() { }

  ngOnInit() {
  }

}
