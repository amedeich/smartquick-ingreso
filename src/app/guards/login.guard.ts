import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = !!JSON.parse(localStorage.getItem('____SQ'));
    this.dataService._loggedUser = JSON.parse(localStorage.getItem('____SQ')) ?? null;
    if (!auth) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
