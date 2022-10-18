import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngDropdown: string | undefined;
  numeros: any;

  operacion = [
    { value: 'alquiler', viewValue: 'Alquiler' },
    { value: 'compra', viewValue: 'Compra' },
  ];

  constructor() {
    this.numeros = Array(50);
  }

  ngOnInit(): void {}
}
