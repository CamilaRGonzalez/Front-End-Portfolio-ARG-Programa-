import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit{
  proyectos : Proyecto[] =[];
  seleccionado : Proyecto = {id:0,nombre:"",tecnologias:"",descripcion:"",foto:"",link:""}
  private foto:any;

  constructor(private servicio: ProyectosService){}

  ngOnInit() {
    this.obtenerProyectos();
  }

  obtenerProyectos(){
    this.servicio.getProyectos().subscribe(
      res =>{
        this.proyectos = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

    //Seleccionar educacion al editar foto o info
    public seleccionarProyecto(id:Number){
      let arr = this.proyectos.filter(proy => proy.id == id)
      this.seleccionado.id =arr[0].id;
      this.seleccionado.nombre = arr[0].nombre;
      this.seleccionado.tecnologias = arr[0].tecnologias;
      this.seleccionado.descripcion = arr[0].descripcion;
      this.seleccionado.link = arr[0].link;
      this.seleccionado.foto = arr[0].foto;
    }
  
    //Limpiar seleccionado al agregar uno nuevo
    public limpiarProyecto(){
      this.seleccionado.id = 0;
      this.seleccionado.nombre = "";
      this.seleccionado.tecnologias = "";
      this.seleccionado.descripcion = "";
      this.seleccionado.foto ="";
      this.seleccionado.link = "";
    }

    public eliminarProyecto(id : Number){
      this.servicio.eliminarProyecto(id).subscribe(
        res => this.ngOnInit(),
        err => {this.ngOnInit();
          console.log(err)}
      )
    }


    public guardarInfo(){
      if(this.seleccionado.id == 0){
        this.servicio.nuevoProyecto(this.seleccionado).subscribe(
          res => this.ngOnInit(),
          err => {this.ngOnInit();
            console.log(err)}
        )
      }
      else{
        this.servicio.editarProyecto(this.seleccionado).subscribe(
          res => this.ngOnInit(),
          err => {this.ngOnInit();
            console.log(err)}
        )
      }   
    }

  //GUARDAR FOTO
  public capturarImagen(event: any):any{
    this.foto = event.target.files[0];
    
  }

  public guardarFoto():any{
    let formulario = new FormData();
    formulario.append("archivo",this.foto);
    formulario.append("id",this.seleccionado.id.toString());

    this.servicio.editarFoto(formulario).subscribe(
      res => this.ngOnInit(),
      err => {this.ngOnInit();
        console.log(err)}
    );
  }
}
