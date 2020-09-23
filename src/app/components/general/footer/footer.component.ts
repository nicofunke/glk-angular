import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Include Fontawesome icons
  fafacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelope = faEnvelope;
  fauser = faUserAlt

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
