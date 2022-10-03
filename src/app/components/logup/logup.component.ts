import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css'],
})
export class LogupComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor() {}
  ngOnInit(): void {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
