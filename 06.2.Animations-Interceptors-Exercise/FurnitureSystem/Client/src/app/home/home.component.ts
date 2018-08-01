import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string;

  constructor() { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('currentUser: ', currentUser)
    if (currentUser) {
       this.username = JSON.parse(localStorage.getItem('currentUser')).username;
       console.log('username: ', this.username)
    }
  }
}
