import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'loginauth';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(body: any) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + window.sessionStorage.getItem('token'));
    return this.httpClient.post('loginauth', body, { headers: headers });
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/', 'home']);
  }
}
