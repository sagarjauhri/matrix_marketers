import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _global: GlobalService,
    private _router: Router
  ) { }
  canActivate(){
    if (this._global.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/welcome']);
      return false;
    }
  }

}
