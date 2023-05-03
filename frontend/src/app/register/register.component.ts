import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const favouriteColour = form.value.favouriteColour;

    if (!(validEmail(email) && validName(name) && validName(favouriteColour))) {
      return;
    }

    this.userService
      .postRegister(name, email, favouriteColour)
      .subscribe(() => {
        // Once we've received a response, take the user to the home page
        this.router.navigateByUrl('/home');
      });
  }
}

const validEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validName = (name: string) => {
  return /^[a-zA-Z ]+$/.test(name);
};
