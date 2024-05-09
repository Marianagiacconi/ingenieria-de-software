import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css'],
})
export class AbmUsuarioComponent implements OnInit {
  @Input() user_id!: string;
  @Input() tipoOperacion!: string;

  user: any;

  constructor(private UsersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.UsersService.getUser(this.user_id).subscribe((data: any) => {
      console.log('JSON data: ', data);
      this.user = data;
    });
  }
  alta(): void {
    try {
      this.UsersService.postUsers(this.user_id).subscribe((data: any) => {
        alert('Usuario dado de alta');
        this.router.navigate(['/usuarios']);
      });
    } catch (e) {
      console.log(e);
    }
  }
  admin(): void {
    if (!this.user.admin) {
      this.UsersService.putUser(this.user_id, { admin: 1 }).subscribe(
        (data: any) => {
          alert('Usuario editado');
          this.router.navigate(['/usuarios']);
        }
      );
    } else {
      this.UsersService.putUser(this.user_id, { admin: 0 }).subscribe(
        (data: any) => {
          alert('Usuario editado');
          this.router.navigate(['/usuarios']);
        }
      );
    }
  }

  delete(): void {
    try {
      this.UsersService.delUser(this.user_id).subscribe((data: any) => {
        alert('Usuario Eliminado');
        this.router.navigate(['/usuarios']);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
