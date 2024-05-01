import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private apiUrl = 'http://api.example.com/posts'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  like(postId: number): Observable<any> {
    const likeUrl = `${this.apiUrl}/${postId}/like`;
    return this.http.post(likeUrl, {}).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  unlike(postId: number): Observable<any> {
    const unlikeUrl = `${this.apiUrl}/${postId}/unlike`;
    return this.http.delete(unlikeUrl).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del servidor
      console.error(
        `Código de error ${error.status}, ` +
        `body: ${error.error}`);
    }
    // Retorna un observable con un mensaje de error
    return throwError('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
  }
}
