import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';

export const routes: Routes = [
  { path: 'login/registro', component: LogupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'favorito', component: FavoritosComponent },
  { path: 'login/password', component: ForgetPasswordComponent },
];
