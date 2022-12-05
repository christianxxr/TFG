import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { Router } from '@angular/router';

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

  listaInmuebles: IntInmueble[] = [];

  constructor(private servicio:InmueblesService, private router: Router) {
    this.numeros = Array(6);
  }

  ngOnInit(): void {
    this.obtenerTodosLosInmuebles();
  }

  obtenerTodosLosInmuebles() {
    this.servicio.mostrarTodosLosInmuebles().subscribe(data => {
      this.listaInmuebles = data;
    });

  }

}
