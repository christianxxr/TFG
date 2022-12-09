import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntUsuario } from '../model/usuarios.interface';
import { USUARIOS } from '../mocks/usuarios.mock';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

constructor(private http: HttpClient) { }

mostrarTodosLosUsuarios(): Observable<IntUsuario[]> {
  return this.http.get<IntUsuario[]>('/usuarios/mostrarTodos');
}

// === Desde el mock ===

userControl: IntUsuario | undefined;

getUserByEmailAndPassword(email: string, password: string) {
  const user = USUARIOS.find((foo: IntUsuario) => (foo.email === email && foo.contrasena === password));
  this.userControl = user;
  let observable: Observable<IntUsuario> = new Observable(observer => {
    observer.next(user);
    observer.complete();
  });

  if(user) {
    return observable;
  } else {
    return
  }
}

}
