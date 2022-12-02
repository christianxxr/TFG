import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntInmueble } from '../model/inmuebles.interface';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  //urlRequestMapping: string = 'http://localhost:8089/inmuebles/';

  constructor(private http: HttpClient) { }

  mostrarTodosLosInmuebles(): Observable<IntInmueble[]> {
    //let url = this.urlRequestMapping + 'mostrarTodos';
    return this.http.get<IntInmueble[]>('/inmuebles/mostrarTodos');
  }
}
