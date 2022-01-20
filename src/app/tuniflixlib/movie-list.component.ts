import { Component } from '@angular/core';
import { IMovie } from './movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: IMovie[] = [];
  context: 'ADD' | 'UPDATE';
  indexMovieToUdate:number=-1
  movieToUpdate: IMovie = { title: '', description: '', cover: '' };

  constructor() {
    this.context = 'ADD';
  }
  addMovieToTheList(m: IMovie) {
    this.movies.push(m);
  }

  deleteMovie(mv: IMovie) {
    this.movies = this.movies.filter((movie) => {
      if (
        !(
          movie.title === mv.title &&
          movie.description === mv.description &&
          movie.cover === mv.cover
        )
      ) {
        return movie;
      }
    });
  }

  selectMovieToupdate(mv: IMovie,index:number) {
    this.context = 'UPDATE';
    this.movieToUpdate = { ...mv };
    this.indexMovieToUdate=index;
  }

  updateTheMovie(message: { movie: IMovie; index: number }) {
    this.movies[message.index] = { ...message.movie };
  }
}
