import { Component, Input } from '@angular/core';
import { LikesService } from '../services/likes.service';

@Component({
  selector: 'app-like-button',
  template: `
  <button (click)="like()">
  <img src=" assets/icons8-love-circled-50.png" alt="Me gusta" width="24" height="24">
  </button>
  <span *ngIf="likesCount">{{ likesCount }} {{ likesCount === 1 ? 'like' : 'likes' }}</span>

  `
})
export class LikesComponent {
  @Input() contentId: string = ''; // Solo se necesita el contentId

  liked: boolean = false;
  likesCount: number = 0;

  constructor(private likesService: LikesService) {}

  ngOnInit() {
    // Implementa la lógica para obtener el estado actual de "Me gusta" y el recuento de "Me gusta" del servidor aquí
  }

  like() {
    if (this.liked) {
      // Si ya le ha dado "Me gusta", se llama al método para quitar el "Me gusta"
      this.likesService.unlike(+this.contentId).subscribe(() => {
        this.liked = false; // Actualiza el estado de "Me gusta" a falso
        this.likesCount--; // Reduce el recuento de "Me gusta" en uno
      });
    } else {
      // Si no le ha dado "Me gusta" anteriormente, se llama al método para agregar el "Me gusta"
      this.likesService.unlike(+this.contentId).subscribe(() => {
        this.liked = true; // Actualiza el estado de "Me gusta" a verdadero
        this.likesCount++; // Incrementa el recuento de "Me gusta" en uno
      });
    }
  }
}
