import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { Habilidad } from 'src/app/modelos/habilidad';
import { Persona } from 'src/app/modelos/persona';
import { Proyecto } from 'src/app/modelos/proyecto';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { SobremiServiceService } from 'src/app/servicios/sobremi-service.service';

@Component({
  selector: 'app-read-only',
  templateUrl: './read-only.component.html',
  styleUrls: ['./read-only.component.css']
})
export class ReadOnlyComponent implements OnInit{
  persona : Persona = {"foto":"","nombreyapellido":"","sobremi":"","titulo":"","id":0};
  public educacion : Educacion[] = [];
  public habilidades : Habilidad[] = [];
  public clase = "skillBarValue value-";
  public proyectos : Proyecto[] =[];
  
  constructor(private service : SobremiServiceService,
    private servicioEdu :EducacionService,
    private servicioHab: HabilidadesService,
    private servicioProy: ProyectosService){}

  ngOnInit(): void {
    this.obtenerPersona();
    this.listarEducacion();
    this.listarHabilidades();
    this.obtenerProyectos();
  }

  private obtenerPersona(){
    this.service.getPersona("1").subscribe(
      res=> {this.persona = res;
      console.log(res)},
      err => console.log(err)
      )
  }

  listarEducacion(){
    this.servicioEdu.getEducacion().subscribe(
      res =>{
        this.educacion = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  listarHabilidades(){
    this.servicioHab.getHabilidades().subscribe(
      res =>{
        this.habilidades = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  obtenerProyectos(){
    this.servicioProy.getProyectos().subscribe(
      res =>{
        this.proyectos = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
