import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  userDetails = this.userService?.getUserDetails();

  name: string = this.userDetails?.name ? this.userDetails?.name : 'name';
  userId: string = this.userDetails?.userId
    ? this.userDetails?.userId
    : 'userId';
  favouriteColour: string = this.userDetails?.favouriteColour
    ? this.userDetails?.favouriteColour
    : 'favouriteColour';
}
