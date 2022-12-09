import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntUsuario } from '../model/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  encontrarUsuarioPorId(id: string): Observable<any> {
    return this.http.get<string>('/usuarios/mostrar' + '/' + id);
  }

}
