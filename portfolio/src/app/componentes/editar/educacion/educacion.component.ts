import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  public educacion : Educacion[] = [];
  public seleccionado : Educacion ={id:0,titulo:"",institucion:"",fechainicio: "",foto:"",estado:""}
  private foto:any;

  constructor(private servicio:EducacionService){}
  
  ngOnInit() {
    this.listarEducacion();
  }

  //obtiene la información de la tabla educacion del back end y se la asigna al array educacion
  listarEducacion(){
    this.servicio.getEducacion().subscribe(
      res =>{
        this.educacion = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  //envía el id del item a borrar de la base de datos
  public eliminarEducacion(id : Number){
    this.servicio.eliminarEducacion(id).subscribe(
      res => this.ngOnInit(),
      err => {this.ngOnInit();
        console.log(err)}
    )
  }

  //Carga la información del item seleccionado en la variable "seleccionado"
  public seleccionarHabilidad(id:Number){
    //filtra array educación por id
    let arr = this.educacion.filter(educ => educ.id == id)
    //pasa fecha a formato string YYYY-MM-dd
    let fechaformateada = this.formatearFecha(arr[0].fechainicio);

    //asigna a seleccionado toda la información del item filtrado
    this.seleccionado.id = arr[0].id;
    this.seleccionado.titulo = arr[0].titulo;
    this.seleccionado.institucion = arr[0].institucion;
    this.seleccionado.estado = arr[0].estado;
    this.seleccionado.fechainicio = fechaformateada;

  }

  //Limpiar seleccionado al agregar uno nuevo
  /*Si se selecciona la opcion agregar nuevo, se limpia la variable seleccionado 
  para que no aparezcan los datos en el formulario*/
  public limpiarHabilidad(){
    this.seleccionado.id = 0;
    this.seleccionado.titulo = "";
    this.seleccionado.institucion = "";
    this.seleccionado.estado = "";
    this.seleccionado.foto ="";
    this.seleccionado.fechainicio = "";
  }

  //envía la información al back end para editar o agregar un nuevo item
  public guardarInfo(){
    //si el id es 0 es porque se crea un item nuevo
    if(this.seleccionado.id == 0){
      this.servicio.nuevaEducacion(this.seleccionado).subscribe(
        res => this.ngOnInit(),
        err => {this.ngOnInit();
          console.log(err)}
      )
    }
    else{ 
      //si el id no es 0 es porque es un item existente     
      this.servicio.editarEducacion(this.seleccionado).subscribe(
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

  //pasa de formato dd/MM/YYYY a YYYY-MM-dd
  /*la fecha del back end se recibe como dd/MM/YYYY, lista para mostrarse por pantalla,
  pero para mostrarla en un textbox date y enviarla al back end para editar o crear nuevo
  debe estar en formato YYYY-MM-dd*/ 
  private formatearFecha(fecha:string):string {
    let separada=["","",""];
    let nueva = "";

    let index=0;
    for(let i=0; i<fecha.length;i++)
    {
        if(fecha[i] != "/")
        {
            separada[index] = fecha[i]
        }
        else{
            index++;
        }
    }
    nueva = separada[2] + "-" + separada[1] + "-" + separada[0]
    return nueva;
  }
}
