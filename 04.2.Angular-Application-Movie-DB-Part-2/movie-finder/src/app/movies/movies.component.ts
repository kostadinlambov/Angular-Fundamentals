import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  moviesInTheaters: Object;
  bestKidsMovies: Object;
  bestDramaMovies: Object;
  movie: Object;
  foundMovies: Object;
  isSeachButtonClicked: boolean = false;
  // inputString: string = '';

  constructor(
    private moviesService: MoviesService) { }

  ngOnInit() {
    // this.isSeachButtonClicked = false;
    this.moviesService.getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log('popular: ', this.popular);
      });

    this.moviesService.getMoviesInTheaters()
      .subscribe(data => {
        this.moviesInTheaters = data;
        console.log('moviesInTheaters: ', data.results);
      });

    this.moviesService.getKidsMovies()
      .subscribe(data => {
        this.bestKidsMovies = data;
        console.log('kidsMovies: ', data.results);
      });

    this.moviesService.getDramaMovies()
      .subscribe(data => {
        this.bestDramaMovies = data;
        console.log('bestDramaMovies: ', data.results);
      });
  }

  toggleView() {
    if (this.isSeachButtonClicked) {
      this.isSeachButtonClicked = !this.isSeachButtonClicked;
    }
  }

  searchFnc(inputObj: Object) {
    console.log('inputString: ', inputObj['search']);
    const inputString = inputObj['search'];
    if(inputString !== undefined && inputString.length > 0){
      this.moviesService.findAMovie(inputString)
      .subscribe(data => {
        if (!this.isSeachButtonClicked) {
          this.isSeachButtonClicked = !this.isSeachButtonClicked;
        }
        this.foundMovies = data;
        console.log('foundMovies: ', data.results);
      });
    }
  }
}
