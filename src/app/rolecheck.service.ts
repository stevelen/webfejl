import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RolecheckService implements CanActivate {

  constructor(private router : Router) { }

    canActivate(): boolean {
      if(localStorage.getItem("username") == "admin") {
        return true;
      }
      this.router.navigate(['/bedroom']);
      return false;
    }

}
