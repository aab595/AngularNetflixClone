import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie.card.component';
import { CatalogComponent } from './catalog.componet';
import { MovieForm } from './tuniflixlib/movie-form.component';
import { MovieListComponent } from './tuniflixlib/movie-list.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent, 
    MovieCardComponent, 
    CatalogComponent, 
    MovieForm,
    MovieListComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
