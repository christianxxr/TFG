import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css'],
})
export class NuevoInmuebleComponent implements OnInit {
  ngDropdownOperacion: string | undefined;

  operacion = [
    { value: 'alquiler', viewValue: 'Alquiler' },
    { value: 'compra', viewValue: 'Compra' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
