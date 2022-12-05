import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';


@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css'],
})
export class NuevoInmuebleComponent implements OnInit {
  ngDropdownOperacion: string | undefined;

<<<<<<< HEAD
  inmuebleFormulario: FormGroup = new FormGroup({
    operacion: new FormControl(''),
    pais: new FormControl(''),
    zona: new FormControl(''),
    area: new FormControl(''),
    inmueble: new FormControl(''),
    precio: new FormControl(''),
  });

  constructor(private formbuilder: FormBuilder, private servicio: InmueblesService) { }

  ngOnInit(): void {}

  get operacion() {
    return this.inmuebleFormulario.get('operacion');
  }
  get pais() {
    return this.inmuebleFormulario.get('pais');
  }
  get zona() {
    return this.inmuebleFormulario.get('zona');
  }
  get area() {
    return this.inmuebleFormulario.get('area');
  }
  get inmueble() {
    return this.inmuebleFormulario.get('inmueble');
  }
  get precio() {
    return this.inmuebleFormulario.get('precio');
  }

  enviarDatosNuevoInmueble() {
    console.table(this.inmuebleFormulario.value);

    //let inmueble = this.inmuebleFormulario.value;
    //this.servicio.incluirInmueble(inmueble).subscribe(data => console.log(data));
  }
=======
  operacion = [
    { value: 'alquiler', viewValue: 'Alquiler' },
    { value: 'compra', viewValue: 'Compra' },
  ];

  constructor() {}
>>>>>>> 5922ac387f4c8328992b1996d5676f63849c312a

  ngOnInit(): void {}
}
