import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Injectable({providedIn: 'root'})

export class sesionAuth implements CanActivate{

    constructor(private router:Router, private loginService: LoginService){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const usuario = this.loginService.usuarioData;

        if(usuario == null){
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }


}
