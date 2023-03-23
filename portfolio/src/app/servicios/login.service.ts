import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Respuesta } from '../modelos/response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/login/";
  public usuarioSubject : BehaviorSubject<String | null>;

  //si el usuario está logueado, su nombre de usuario está guargado en el local storage
  //se asigna el nombre de usuario al sujeto si está logueado y si no es así, se asigna null
  constructor(private http: HttpClient) {
    if(localStorage.getItem('usuario') != null)
      this.usuarioSubject = new BehaviorSubject<String | null>(localStorage.getItem('usuario')!);
    else
      this.usuarioSubject = new BehaviorSubject<String | null>(null);
   }

  public get usuarioData():String | null{
    return this.usuarioSubject.value;
  }

  //pipe: sirve para ejecutar funciones con los resultados de los observables

  login(formuario: FormData):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.url,formuario).pipe(
      map(res =>{
        console.log(res);
        if(res.login === 1){
          const user : String = res.usuario;
          localStorage.setItem('usuario', JSON.stringify(user)); 
          this.usuarioSubject.next(user); //cambia el estado del sujeto y hace que los suscriptores respondan al cambio
        }
        return res;
      })
    );    
  }

  logout(){
    localStorage.removeItem('usuario');
    console.log(this.usuarioSubject.value);
    this.usuarioSubject.next(null);
  }
}
