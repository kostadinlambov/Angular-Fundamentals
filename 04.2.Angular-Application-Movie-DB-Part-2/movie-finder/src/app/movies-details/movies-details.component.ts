import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie: Object;
  genresString: string = '';
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    console.log('this.route.params: ', this.route.params);
    this.route.params
      .subscribe((params) => {
        if (params.id !== undefined) {
          const id = params['id'];
          // debugger
          console.log('id: ', id);
          this.moviesService.getMovie(id)
            .subscribe((movie) => {
              for (const genre of movie['genres']) {
                if (genre !== undefined) {
                  this.genresString += genre['name'] + ', ';
                }
              }
              if (movie['genres'].length > 0) {
                this.genresString = this.genresString.substring(0, this.genresString.length - 2);
              }
              this.movie = movie;
            });
        }
      });
  }
}
