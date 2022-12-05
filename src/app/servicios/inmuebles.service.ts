import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntInmueble } from '../model/inmuebles.interface';

@Injectable({
  providedIn: 'root',
})
export class InmueblesService {
  //urlRequestMapping: string = 'http://localhost:8089/inmuebles/';

  constructor(private http: HttpClient) {}

  incluirInmueble(inmueble: IntInmueble): Observable<IntInmueble> {
    //let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    //let options = { headers: httpheaders};
    return this.http.post<IntInmueble>('/inmuebles/crear', inmueble);
  }

  mostrarTodosLosInmuebles(): Observable<IntInmueble[]> {
    return this.http.get<IntInmueble[]>('/inmuebles/mostrarTodos');
  }

  mostrarInmueblePorId(id: string): Observable<string> {
    return this.http.get<string>('/inmuebles/mostrar' + '/' + id);
  }

  //ToDo: Método para editar un inmueble por id
  editarInmueble() {}

  eliminarInmueble(id: string): Observable<string> {
    return this.http.delete<string>('/inmuebles/borrar' + '/' + id);
  }
}
