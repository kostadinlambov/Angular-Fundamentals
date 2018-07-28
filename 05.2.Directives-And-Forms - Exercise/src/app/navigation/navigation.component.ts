import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(data => {});
  }
}
