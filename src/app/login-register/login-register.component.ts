import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  firstname: string;
  surname: string;
  dateOfBirth: number;
  password: string;
  passwordConfirmation: string;

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(
      "first name: " +this.firstname +
      "surname: " + this.surname+
      "date of birth: " + this.dateOfBirth
    )
  }

}
