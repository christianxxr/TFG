import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  inmueble: IntInmueble = {
    inmuebleId: '',
    tipoOperacion: '',
    pais: '',
    zona: '',
    area: '',
    tipoInmueble: '',
    precio: 0,
    urlImagen: '',
    guardadoPor: [],
  };

  listaInmuebles: IntInmueble[] = [];
  constructor(private servicio: InmueblesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosInmuebles();
  }

  obtenerTodosLosInmuebles() {
    this.servicio.mostrarTodosLosInmuebles().subscribe((data) => {
      this.listaInmuebles = data;
    });
  }
}
