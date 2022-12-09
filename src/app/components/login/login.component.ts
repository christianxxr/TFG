import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';
import { IntUsuario } from 'src/app/model/usuarios.interface';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  listaUsuarios: IntUsuario[] = [];

  loginFormulario: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private formbuilder: FormBuilder, private servicio: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodosLosUsuarios();
  }

obtenerTodosLosUsuarios() {
    this.servicio.mostrarTodosLosUsuarios().subscribe(data => {
      this.listaUsuarios = data;
    });
  }

 // === Toma de datos desde el formulario ===

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
