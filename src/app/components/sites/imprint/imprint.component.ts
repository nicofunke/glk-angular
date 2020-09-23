import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  username: string;
  password: string;
  submitted = false;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  /**
   * Emits the input values to the service to log in
   */
  submitInput(): void {
    this.userService.sendLoginData(this.username, this.password);
    this.submitted = true;
  }
}
