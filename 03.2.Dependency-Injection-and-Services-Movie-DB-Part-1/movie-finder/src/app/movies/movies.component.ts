import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  moviesInTheaters: Object;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular()
    .subscribe(data => {
      this.popular = data;
      console.log(this.popular);
    });

    this.moviesService.getMoviesInTheaters()
    .subscribe(data => {
      this.moviesInTheaters = data;
      console.log(data.results);
    });
  }

}
