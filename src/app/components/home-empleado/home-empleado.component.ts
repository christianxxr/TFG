import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { Router } from '@angular/router';
import { NuevoInmuebleComponent } from '../nuevo-inmueble/nuevo-inmueble.component';

@Component({
  selector: 'app-home-empleado',
  templateUrl: './home-empleado.component.html',
  styleUrls: ['./home-empleado.component.css']
})
export class HomeEmpleadoComponent implements OnInit {

  inmueble: IntInmueble = {
    inmuebleId: "",
    tipoOperacion: "",
    pais: "",
    zona: "",
    area: "",
    tipoInmueble: "",
    precio: 0,
    guardadoPor: []
  };
  
  listaInmuebles: IntInmueble[] = [];

  constructor(private servicio:InmueblesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTodosLosInmuebles();
  }

  obtenerTodosLosInmuebles() {
    this.servicio.mostrarTodosLosInmuebles().subscribe(data => {
      this.listaInmuebles = data;
    });

  }

  nuevoInmueble() {
    this.router.navigate(['home-empleado/nuevo-inmueble']);
  }

  editarInmueble(id: string) {
    this.router.navigate(['home-empleado/editar-inmueble', id]);
  }

//! PARA SALIR DEL PASO CON ELIMINAR
  eliminarInmueble() {
    console.log("Intentando eliminar inmueble");
  }

  /*
  eliminarInmueble(id: string) {
    this.inmueble?.mostrarInmueblePorId(id);
    this.servicio.eliminarInmueble(inmueble.inmuebleId).subscribe(data => {
      this.servicio.mostrarTodosLosInmuebles().subscribe(response =>
        this.listaInmuebles = response);
    });
  }
  */
}
