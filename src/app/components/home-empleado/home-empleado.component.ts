import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-home-empleado',
  templateUrl: './home-empleado.component.html',
  styleUrls: ['./home-empleado.component.css']
})
export class HomeEmpleadoComponent implements OnInit {

  constructor(private api:InmueblesService) { }

  ngOnInit(): void {
    this.api.mostrarTodosLosInmuebles().subscribe(data => {
      console.log(data);
    })
  }

}
