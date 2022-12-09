import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntUsuario } from '../model/usuarios.interface';
import { USUARIOS } from '../mocks/usuarios.mock';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

userControl: IntUsuario | undefined;

getUserById(id: string) {
  const user = USUARIOS.find((foo: IntUsuario) => foo.usuarioId === id);
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
