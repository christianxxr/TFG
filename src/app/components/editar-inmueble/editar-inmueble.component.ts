import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css'],
})
export class EditarInmuebleComponent implements OnInit {
  ngDropdownOperacion: string | undefined;

  operacion = [
    { value: 'alquiler', viewValue: 'Alquiler' },
    { value: 'compra', viewValue: 'Compra' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
