import { Component } from '@angular/core';
import { Authenticate, AuthService } from "@math-express/data-access";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
      private authService: AuthService) { }

  login(authenticate: Authenticate) {
    this.authService.login(authenticate);
  }
}
