import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'auth'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión
  login(credentials: { username: string, password: string }): Observable<string> {
    // Implementa la lógica para enviar las credenciales al servidor y obtener el token de autenticación
    // Una vez autenticado, puedes guardar el token en el almacenamiento local o de sesión
    // Puedes usar el token para recuperar el userId si es necesario
  }

  // Método para cerrar sesión
  logout(): void {
    // Implementa la lógica para cerrar sesión, por ejemplo, eliminando el token de autenticación del almacenamiento local o de sesión
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Implementa la lógica para verificar si el usuario está autenticado, por ejemplo, comprobando si el token de autenticación está presente en el almacenamiento local o de sesión
    return false; // Devuelve true si el usuario está autenticado, de lo contrario, devuelve false
  }

  // Método para obtener el userId del usuario autenticado
  getUserId(): Observable<number> {
    // Aquí puedes enviar una solicitud HTTP al servidor para obtener el userId
    // usando el token de autenticación almacenado previamente
    // El servidor debe devolver el userId asociado con el token
    // En este ejemplo, supongamos que el servidor devuelve un objeto con el userId
    return this.http.get<number>(`${this.apiUrl}/user/id`);
  }

  // Otros métodos de autenticación (verificar si está autenticado, etc.)
}
