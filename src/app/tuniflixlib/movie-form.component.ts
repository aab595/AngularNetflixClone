import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IMovie } from './movie.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieForm implements OnChanges {
  @Output() onMovieAdded: EventEmitter<IMovie> = new EventEmitter<IMovie>();
  @Output() onMovieUpdated : EventEmitter<{movie:IMovie,index:number}> = new EventEmitter<{movie:IMovie,index:number}>()

  movieForm: FormGroup;
  @Input() context: 'ADD' | 'UPDATE';
  @Input() currentMovie: IMovie;
  @Input() indexMovieToUpdate: number

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: [''],
      description: [''],
      cover: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.movieForm.setValue({
      title:this.currentMovie?.title,
      description:this.currentMovie?.description,
      cover:this.currentMovie?.cover
    })
  }

  addMovieToList() {
    if(this.context==="ADD"){
      this.onMovieAdded.next(this.movieForm.value);
    }else if (this.context="UPDATE"){
      this.onMovieUpdated.emit({movie:this.movieForm.value,index:indexMovieToUpdate})
    }
    this.movieForm.reset();
  }

 
}
