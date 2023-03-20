import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { SobremiServiceService } from 'src/app/servicios/sobremi-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona : Persona = {"foto":"","nombreyapellido":"","sobremi":"","titulo":"","id":0};
  foto : any = null;

  constructor(private service : SobremiServiceService){}

  ngOnInit(): void {
    this.obtenerPersona();
  }

  //obtiene la información de la tabla persona del back end y se la asigna a la variable persona
  private obtenerPersona(){
    this.service.getPersona("1").subscribe(
      res=> {this.persona = res;
      console.log(res)},
      err => console.log(err)
      )
  }

  //captura archivo del input form control
  public capturarImagen(event: any):any{
    this.foto = event.target.files[0];
    
  }

  //adjunta el archivo a un FormData y se envía al back end
  public guardarFoto():any{
    let formulario = new FormData();
    formulario.append("archivo",this.foto);

    this.service.editarFoto(formulario).subscribe(
      res => this.ngOnInit(),
      err => {this.ngOnInit();
        console.log(err)}
    );
  }

  //envía al back end la informacion de la variable persona cargada en el formulario editar
  public guardarInfo():any{
    this.service.editarPersona(this.persona).subscribe(
      res => this.ngOnInit(),
      err => {this.ngOnInit();
        console.log(err)}
    );
  }
}
