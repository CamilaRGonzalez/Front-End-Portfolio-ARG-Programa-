import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  url = "http://localhost:8080/habilidades/"
  constructor(private http: HttpClient) { }

  getHabilidades(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url);
  }

  createHabilidad(habilidad : Habilidad): Observable<any>{
    return this.http.post(this.url + "nueva",habilidad);
  }

  editarHabilidad(habilidad : Habilidad): Observable<any>{
    return this.http.put(this.url + "editar",habilidad);
  } 

  editarFoto(formulario :FormData): Observable<any>{
    return this.http.put(this.url + "editarfoto",formulario);
  } 

  eliminarHabilidad(id: Number): Observable<any>{
    return this.http.delete(this.url + "eliminar/" + id.toString());
  } 
}
