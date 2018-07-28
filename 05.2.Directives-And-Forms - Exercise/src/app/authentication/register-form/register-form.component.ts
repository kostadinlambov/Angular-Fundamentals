import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  user: RegisterModel = new RegisterModel();
  message: string;
  success: boolean = true;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  register(formData) {
    console.log(formData);
    this.authService
      .register(this.user)
      .subscribe(
        data => {},
        err => {}
      );
  }

  inputClick(inputFieldInfo) {
    console.log(inputFieldInfo);
  }
}

