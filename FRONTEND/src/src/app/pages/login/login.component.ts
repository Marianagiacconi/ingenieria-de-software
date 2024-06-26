import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(
    private LoginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) {
    
  }

 ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     email: ['' ,Validators. required],
     password: ['',Validators. required],
    })
}

pass = '';
email = '';

  onEmail(event: any) {
    this.email = event.target.value ;
  }
  onPass(event: any) {
    this.pass = event.target.value;
  }


  iniciarSession(email:string, password:string): void{   
    this.LoginService.login({"email": email, "password": password}).subscribe((data:any) =>{
      console.log(data)
      window.sessionStorage.setItem("email",data.email)
      window.sessionStorage.setItem("id",data.id)
      window.sessionStorage.setItem("token",data.access_token)
      this.router.navigate(['/home'])
      
    })
  }

  submit(){
    if(this.loginForm.valid){
       let email = this.loginForm.value.email;
       let password = this.loginForm.value.password;
       this.iniciarSession(email, password);
       }else{
          alert("Formulario invalido")
      } 
}

}
