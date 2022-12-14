import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor() {}
  ngOnInit(): void {}

  newPassword() {
    console.log(this.email);
    console.log(this.password);
  }
}
