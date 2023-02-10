import { Component } from '@angular/core';
import { Authenticate, AuthService } from "@math-express/data-access";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
      private authService: AuthService,
      public activeModal: NgbActiveModal) { }

  login() {
    const loginData: Authenticate = {
      username: this.loginForm.value.username as string,
      password: this.loginForm.value.password as string,
    }
    this.authService.login(loginData).subscribe();
  }
}
