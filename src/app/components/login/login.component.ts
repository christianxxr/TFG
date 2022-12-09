import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { IntUsuario } from 'src/app/model/usuarios.interface';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginFormulario: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private formbuilder: FormBuilder, private servicio: LoginService, private router: Router) {}

  ngOnInit(): void {}

  get email() {
    return this.loginFormulario.get('email');
  }
  get contrasena() {
    return this.loginFormulario.get('contrasena');
  }
 
  login() {
    this.servicio.getUserByEmailAndPassword(this.email?.value, this.contrasena?.value)?.subscribe((response) => {
      if(response.rol === "Empleado") {
        this.router.navigate(['/home-empleado']);
      } else {
        this.router.navigate(['/favorito']);
      }
    });
  }

  
  




}
