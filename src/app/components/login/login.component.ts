import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { IntUsuario } from 'src/app/model/usuarios.interface';
import { Router } from '@angular/router';
//import { NuevoInmuebleComponent } from '../nuevo-inmueble/nuevo-inmueble.component';
//import { EditarInmuebleComponent } from '../editar-inmueble/editar-inmueble.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  login() {}

  ngOnInit(): void {}

  /*

  usuario: IntUsuario | undefined;
  id: string | undefined;

  //email: string | undefined;
  //contrasena: string | undefined;

  loginFormulario: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private formbuilder: FormBuilder, private servicio:UsuariosService, private router: Router) {}

  login() {

    let usuario = this.loginFormulario.value;
    this.servicio.encontrarUsuarioPorEmail(email: string).subscribe(data => 
      console.log(this.email));
  }

  ngOnInit(): void {}

  get email() {
    return this.loginFormulario.get('email');
  }
  get contrasena() {
    return this.loginFormulario.get('contrasena');
  }


*/


}
