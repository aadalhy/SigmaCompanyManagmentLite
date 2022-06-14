import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.apiUrl}/auth`;

  constructor( private http: HttpClient, private router: Router) { }

  login( correo: string, contrasena: string ): Observable<User> {
    const body: any = {};
    if(correo && contrasena){
      body.strEmail = correo;
      body.strContrasena = contrasena;
    }
    return this.http.post<User>( `${this.url}/login`, {...body});
  }

  checkAuth(): Promise<boolean> {
    if (!localStorage.getItem('token')) {
        this.router.navigateByUrl('/auth/login');
        return Promise.reject(false);
    }
    return Promise.resolve(true);
  }
}
