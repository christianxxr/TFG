import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntInmueble } from '../model/inmuebles.interface';


@Injectable({
  providedIn: 'root',
})

export class InmueblesService {

  constructor(private http: HttpClient) {}

  incluirInmueble(inmueble: IntInmueble): Observable<IntInmueble> {
    return this.http.post<IntInmueble>('/inmuebles/crear', inmueble);
  }

  mostrarTodosLosInmuebles(): Observable<IntInmueble[]> {
    return this.http.get<IntInmueble[]>('/inmuebles/mostrarTodos');
  }

  mostrarInmueblePorId(id: string): Observable<any> {
    return this.http.get<string>('/inmuebles/mostrar' + '/' + id);
  }

  editarInmueble(inmueble: IntInmueble): Observable<IntInmueble> {
    return this.http.put<IntInmueble>('/inmuebles/modificar', inmueble);
  }

  eliminarInmueble(id: string): Observable<string> {
    return this.http.delete<string>('/inmuebles/borrar' + '/' + id);
  }

}
