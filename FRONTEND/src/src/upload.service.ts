import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  serverUrl: string = "http://127.0.0.1:7000/poems"; 

  constructor(private httpClient: HttpClient) { }

  public sendPoemData(poemData: any, httpOptions: any) {
    return this.httpClient.post<any>(this.serverUrl, poemData, httpOptions);
  }
}
