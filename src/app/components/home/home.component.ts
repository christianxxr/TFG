import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngDropdownOperacion: string | undefined;
  ngDropdownPais: string | undefined;
  ngDropdownZona: string | undefined;
  ngDropdownArea: string | undefined;
  ngDropdownInmueble: string | undefined;
  numeros: any;

  operacion = [
    { value: 'alquiler', viewValue: 'Alquiler' },
    { value: 'venta', viewValue: 'Venta' },
    { value: 'venta-alquiler', viewValue: 'Venta-Alquiler' }
  ];

  constructor() {
    this.numeros = Array(50);
  }

  ngOnInit(): void {}
}
