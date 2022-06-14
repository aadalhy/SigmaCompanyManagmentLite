import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
    
  constructor(private _authService: AuthService) {}
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.checkAuth();
  }
}