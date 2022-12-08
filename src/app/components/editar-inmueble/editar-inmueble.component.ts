import { Component, OnInit, Input, Inject } from '@angular/core';
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

  @Input() inmuebleId: string | undefined;

  inmuebleExistenteFormulario: FormGroup = new FormGroup({
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

  get inmuebleEditarId() {
    return this.inmuebleExistenteFormulario.get('inmuebleId');
  }
  get tipoOperacion() {
    return this.inmuebleExistenteFormulario.get('tipoOperacion');
  }
  get pais() {
    return this.inmuebleExistenteFormulario.get('pais');
  }
  get zona() {
    return this.inmuebleExistenteFormulario.get('zona');
  }
  get area() {
    return this.inmuebleExistenteFormulario.get('area');
  }
  get tipoInmueble() {
    return this.inmuebleExistenteFormulario.get('tipoInmueble');
  }
  get precio() {
    return this.inmuebleExistenteFormulario.get('precio');
  }

  get urlImagen() {
    return this.inmuebleExistenteFormulario.get('urlImagen');
  }

  enviarDatosInmuebleExistente() {
    let inmueble = this.inmuebleExistenteFormulario.value;
    this.servicio.incluirInmueble(inmueble).subscribe(data => console.log(data));
    alert("Inmueble actualizado en la base de datos")
    this.inmuebleExistenteFormulario.reset;
    
  }








}
