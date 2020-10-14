import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): boolean {
    if (localStorage.username) {
      return true;
    }
    this.router.navigate(['/home']);
  }
}
