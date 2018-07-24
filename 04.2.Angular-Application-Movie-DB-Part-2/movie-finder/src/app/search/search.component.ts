import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isSeachButtonClicked: boolean = false;
  foundMovies: Object;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  toggleView() {
    if (this.isSeachButtonClicked) {
      this.isSeachButtonClicked = !this.isSeachButtonClicked;
    }
  }

  searchFnc(inputString: string) {
    console.log('inputString: ', inputString);
    // inputString = 'Batman';
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
