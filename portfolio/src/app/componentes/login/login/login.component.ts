import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  email = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email : this.email,
    pass: this.pass
  });

  //si el usuario ya está logueado no se le permite ingresar nuevamente al login
  constructor(private loginService : LoginService, private router:Router){
    if(this.loginService.usuarioData != null){
      this.router.navigate(['/editar']);
    }
  }

  ngOnInit() {

  }

  loguearse(){
    let formulario = new FormData();
    formulario.append("user",this.email.value!);
    formulario.append("pass",this.pass.value!);

    this.loginService.login(formulario).subscribe(res => {
      if(res.login === 1){
        this.router.navigate(['/editar']);
      }
    })
  }
}
