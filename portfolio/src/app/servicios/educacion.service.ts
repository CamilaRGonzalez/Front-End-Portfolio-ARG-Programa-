import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url="http://localhost:8080/educacion/"

  constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url);
  }

  nuevaEducacion(educacion : Educacion):Observable<any> {
    return this.http.post(this.url + "nueva",educacion);
  }

  eliminarEducacion(id:Number):Observable<any>{
    return this.http.delete(this.url + "eliminar/" + id.toString());
  }

  editarEducacion(educacion : Educacion):Observable<any> {
    return this.http.put(this.url + "editar", educacion);
  }

  editarFoto(formulario : FormData):Observable<any> {
    return this.http.put(this.url + "editarfoto", formulario);
  }
}
