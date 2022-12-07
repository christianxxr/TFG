import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css'],
})
export class NuevoInmuebleComponent implements OnInit {
  
  //ngDropdownOperacion: string | undefined;

  inmueble: IntInmueble | undefined;
  

  inmuebleFormulario: FormGroup = new FormGroup({
    operacion: new FormControl(''),
    pais: new FormControl(''),
    zona: new FormControl(''),
    area: new FormControl(''),
    tipoInmueble: new FormControl(''),
    precio: new FormControl(''),
  });

  constructor(private formbuilder: FormBuilder, private servicio: InmueblesService) {}

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
  get tipoInmueble() {
    return this.inmuebleFormulario.get('tipoInmueble');
  }
  get precio() {
    return this.inmuebleFormulario.get('precio');
  }

  enviarDatosNuevoInmueble() {
    console.table(this.inmuebleFormulario.value);
    let inmueble = this.inmuebleFormulario.value;
    this.servicio.incluirInmueble(inmueble).subscribe(data => console.log(data));
    alert("Inmueble añadido a la base de datos")
  }




}
