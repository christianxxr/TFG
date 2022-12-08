import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { IntInmueble } from 'src/app/model/inmuebles.interface';
import { InmueblesService } from 'src/app/servicios/inmuebles.service';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css'],
})
export class EditarInmuebleComponent implements OnInit {
  
  inmueble: IntInmueble | undefined;
  
  inmuebleFormulario: FormGroup = new FormGroup({
    inmuebleId: new FormControl(''),
    tipoOperacion: new FormControl(''),
    pais: new FormControl(''),
    zona: new FormControl(''),
    area: new FormControl(''),
    tipoInmueble: new FormControl(''),
    precio: new FormControl(''),
    urlImagen: new FormControl('')
  });

  constructor(private formbuilder: FormBuilder, private servicio: InmueblesService) {}

  ngOnInit(): void {}

  get inmuebleId() {
    return this.inmuebleFormulario.get('inmuebleId');
  }
  get tipoOperacion() {
    return this.inmuebleFormulario.get('tipoOperacion');
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

  get urlImagen() {
    return this.inmuebleFormulario.get('urlImagen');
  }

  enviarDatosNuevoInmueble() {
    let inmueble = this.inmuebleFormulario.value;
    this.servicio.incluirInmueble(inmueble).subscribe(data => console.log(data));
    alert("Inmueble actualizado en la base de datos")
    this.inmuebleFormulario.reset;
    
  }








}
