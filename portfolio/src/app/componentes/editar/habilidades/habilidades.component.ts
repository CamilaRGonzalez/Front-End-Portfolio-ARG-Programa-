import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  public habilidades : Habilidad[] = [];
  public clase = "skillBarValue value-";
  public seleccionado : Habilidad ={id:0,nombre:"",tipo:"",porcentaje:0,foto:""}
  private foto:any;

  constructor(private servicio: HabilidadesService){}

  ngOnInit() {
    this.listarHabilidades();
  }

  listarHabilidades(){
    this.servicio.getHabilidades().subscribe(
      res =>{
        this.habilidades = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  public eliminarHabilidad(id : Number){
    this.servicio.eliminarHabilidad(id).subscribe(
      res => this.ngOnInit(),
      err => {this.ngOnInit();
        console.log(err)}
    )
  }

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

  public seleccionarHabilidad(id:Number){
    let arr = this.habilidades.filter(habilidad => habilidad.id == id)
    this.seleccionado.id = arr[0].id;
    this.seleccionado.nombre = arr[0].nombre;
    this.seleccionado.porcentaje = arr[0].porcentaje;
    this.seleccionado.tipo = arr[0].tipo;
    this.seleccionado.foto = arr[0].foto;
  }

  public limpiarHabilidad(){
    this.seleccionado.id = 0;
    this.seleccionado.nombre = "";
    this.seleccionado.porcentaje = 0;
    this.seleccionado.tipo = "";
    this.seleccionado.foto ="";
  }

  public guardarInfo(){
    if(this.seleccionado.id == 0){
      this.servicio.createHabilidad(this.seleccionado).subscribe(
        res => this.ngOnInit(),
        err => {this.ngOnInit();
          console.log(err)}
      )
    }
    else{
      this.servicio.editarHabilidad(this.seleccionado).subscribe(
        res => this.ngOnInit(),
        err => {this.ngOnInit();
          console.log(err)}
      )
    }
    
  }
}
