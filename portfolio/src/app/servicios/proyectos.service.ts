import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';
import { linkBack } from '../modelos/back';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = linkBack.url + "proyectos/"

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
