import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'loginauth';
  apiUrl: string = 'http://localhost:4200'; // Reemplaza esta URL por la correcta
  userId: any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(body: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + window.sessionStorage.getItem('token'));
    return this.httpClient.post(`${this.apiUrl}/${this.url}`, body, { headers: headers });
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/', 'home']);
  }

  getUserId(): Observable<any> {
    // Aquí puedes enviar una solicitud HTTP al servidor para obtener el userId
    // usando el token de autenticación almacenado previamente
    // El servidor debe devolver el userId asociado con el token
    // En este ejemplo, supongamos que el servidor devuelve un objeto con el userId
    return this.httpClient.get<any>(`${this.apiUrl}/user/id`);
  }
}
