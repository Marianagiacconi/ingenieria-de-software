import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('users');
  }

  getUser(id: string) {
    return this.httpClient.get('user/' + id);
  }

  postUsers(body: any) {
    return this.httpClient.post('register', body);
  }

  putUser(id: string, body: any) {
    return this.httpClient.put('user/' + id.toString(), body);
  }

  delUser(id: string) {
    return this.httpClient.delete('user/' + id);
  }
}
