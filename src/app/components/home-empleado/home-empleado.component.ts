import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { Router } from '@angular/router';
import { NuevoInmuebleComponent } from '../nuevo-inmueble/nuevo-inmueble.component';
import { EditarInmuebleComponent } from '../editar-inmueble/editar-inmueble.component';

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
    urlImagen: "",
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

  formularioEditarInmueble(id: string) {
    this.servicio.mostrarInmueblePorId(id).subscribe(data => {
      this.inmueble.inmuebleId = data.inmuebleId;
      this.inmueble.tipoOperacion = data.tipoOperacion;
      this.inmueble.pais = data.pais;
      this.inmueble.zona = data.zona;
      this.inmueble.area = data.area;
      this.inmueble.tipoInmueble = data.tipoInmueble;
      this.inmueble.precio = data.precio;
      this.inmueble.urlImagen = data.urlImagen;
      
    });
    
    this.router.navigate(['home-empleado/editar-inmueble']);
  }
 
  eliminarInmueble(id: string) {
    this.servicio.eliminarInmueble(id).subscribe(data => {
      this.servicio.mostrarTodosLosInmuebles().subscribe(response =>
        this.obtenerTodosLosInmuebles());
    });
  }

  
  
}
