import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private sercicio : LoginService,  private router:Router){}

  ngOnInit() {}

  //desloguea y redirige al usuario a la pagina de login
  cerrarSesion(){
    this.sercicio.logout();
    this.router.navigate(['/login']);
  }
}
