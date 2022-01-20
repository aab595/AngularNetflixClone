import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  template: `
  <div class="container">
  <div class="card" style="width:400px">
  <img class="card-img-top myCover" [src]="movie.cover" alt="Card image" style="width:100%">
  <div class="card-body">
    <h4 class="card-title">{{ movie.title}}</h4>
    <p class="card-text">{{ movie.description}}</p>
    </div>
  </div>
  </div>
  <button class="btn-primary" (click)="changeMovie()">To Capitilize Title</button>
  `,
  styles: ['.myCover{height:200px}'],
})
export class MovieCardComponent {
  @Input() movie;
  @Output() onMovieChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  changeMovie() {
    this.onMovieChanged.emit({message:"Please Change all Title in Capital Letters"});
  }
}
