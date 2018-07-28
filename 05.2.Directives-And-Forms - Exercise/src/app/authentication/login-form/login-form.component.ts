import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user: LoginModel = new LoginModel();
  message: string;
  success: boolean = true;
  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(
        data => {},
        err => {}
      );
  }
}
