import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadService } from 'src/upload.service'; 
import { LoginService } from "src/app/services/login.service"

@Component({
  selector: 'app-mantenedorpoems',
  templateUrl: './mantenedorpoems.component.html',
  styleUrls: ['./mantenedorpoems.component.css']
})


// En el componente MantenedorpoemsComponent
export class MantenedorpoemsComponent {
  poemData = {
    title: '',
    content: ''
  };
  newPoem: any;

  constructor(
    private uploadService: UploadService,
    private loginService: LoginService
  ) {}

  submitPoem() {
    console.log(this.poemData.title);
    console.log(this.poemData.content);
    const userId = this.loginService.getUserId();

    if (!userId) {
      console.error('El usuario no ha iniciado sesión.');
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    const poemDataWithUserId = { ...this.poemData, user_id: userId };
  
    this.uploadService.sendPoemData(poemDataWithUserId, httpOptions).subscribe(
      (response) => {
        console.log('Poem created successfully:', response);
      },
      (error) => {
        console.error('Error creating poem:', error);
      }
    );
  }
}
