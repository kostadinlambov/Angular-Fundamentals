import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi: string = "nav-item dropdown";
  dropdownMenu: string = "dropdown-menu";

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    localStorage.clear();
    this.toastrService.info('You have been successfully logged out!');
    this.router.navigate(['/signin']);
  }

  expand() {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = "nav-item dropdown"
      : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = "dropdown-menu"
      : this.dropdownMenu = "dropdown-menu show";
  }
}
