import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  //bu kişi authanticate mi, değil mi ? yani add componentini açabilir mi açamaz mı token'ı var mı yok mu ?
  constructor(private authService : AuthService, private toastrService : ToastrService, private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuthenticated()){
        return true;
      }
    else{
      this.router.navigate(["login"])
      this.toastrService.info("Sisteme giriş yapmalısınız")
      return false;
    }
  } 
  
}
