import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';

const apiKey = '3d2351c8a8368576278b5f4791e8e167';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    moviesInTheaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    authentication: string = '&api_key=';

    constructor(private http: HttpClient) { }
    getPopular(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
        // .pipe()
    }

    getMoviesInTheaters(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.moviesInTheaters}${this.authentication}${apiKey}`);
    }
}