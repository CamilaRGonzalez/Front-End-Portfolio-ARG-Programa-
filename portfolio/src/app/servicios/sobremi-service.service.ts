import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class SobremiServiceService {

  url = "http://localhost:8080/personas/"
  constructor(private http: HttpClient) { }

  getPersona(idUser: string):Observable<any>{    
    return this.http.get(this.url + idUser);
  }

  editarPersona(persona: Persona) : Observable<any>{
    return this.http.put(this.url + "editar",persona);
  }

  editarFoto(formulario :FormData) : Observable<any>{
    return this.http.put(this.url + "editarfoto", formulario);
  }
}
