import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleVistaComponent } from './components/detalle-vista/detalle-vista.component';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeEmpleadoComponent } from './components/home-empleado/home-empleado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import { NuevoInmuebleComponent } from './components/nuevo-inmueble/nuevo-inmueble.component';

export const routes: Routes = [
  { path: 'login/registro', component: LogupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'favorito', component: FavoritosComponent },
  { path: 'login/password', component: ForgetPasswordComponent },
  { path: 'favorito/detalle', component: DetalleVistaComponent },
  { path: 'home/detalle', component: DetalleVistaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home-empleado', component: HomeEmpleadoComponent },
  { path: 'home-empleado/nuevo-inmueble', component: NuevoInmuebleComponent},
  { path: 'home-empleado/editar-inmueble/:id', component: EditarInmuebleComponent},
];
