import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetalleVistaComponent } from './components/detalle-vista/detalle-vista.component';
import { HomeEmpleadoComponent } from './components/home-empleado/home-empleado.component';
import { NuevoInmuebleComponent } from './components/nuevo-inmueble/nuevo-inmueble.component';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    LoginComponent, 
    LogupComponent, 
    HomeComponent, 
    FavoritosComponent, 
    ContactoComponent, 
    ForgetPasswordComponent, 
    FooterComponent, 
    CarouselComponent, 
    DetalleVistaComponent, 
    HomeEmpleadoComponent, 
    NuevoInmuebleComponent, 
    EditarInmuebleComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
