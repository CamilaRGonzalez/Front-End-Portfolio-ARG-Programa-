import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = "http://localhost:8080/proyectos/"

  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url);
  }

  nuevoProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post(this.url + "nuevo",proyecto);
  }

  eliminarProyecto(id:Number):Observable<any>{
    return this.http.delete(this.url + "eliminar/" + id.toString());
  }

  editarProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.put(this.url + "editar",proyecto);
  }

  editarFoto(formulario :FormData): Observable<any>{
    return this.http.put(this.url + "editarfoto",formulario);
  } 
}
