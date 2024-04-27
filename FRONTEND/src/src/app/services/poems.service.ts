
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PoemsService {
  url = 'poems'

  constructor(
    private httpClient: HttpClient
  ) { }

  getPoems() {
    
    
    return this.httpClient.get(this.url)
  }
  getPoem(id: number) {
        
    return this.httpClient.get("poem/"+id)
  }

  postPoem( body: any ) {
    

    return this.httpClient.post("poems",body)
  }

  putPoem(id: string, body: any ) {
    

    return this.httpClient.put('poem/' + id, body)
  }

  delPoem( id:string) {
   

    return this.httpClient.delete('poem/' + id)
  }
}