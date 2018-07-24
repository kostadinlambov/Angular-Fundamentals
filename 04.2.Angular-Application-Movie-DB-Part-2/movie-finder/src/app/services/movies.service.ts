import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';

const apiKey = '3d2351c8a8368576278b5f4791e8e167';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    moviesInTheaters: string = 'discover/movie?primary_release_date.gte=2017-05-15&primary_release_date.lte=2017-07-21';
    kidsMovies: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    bestDrama: string = 'discover/movie?with_genres=18&primary_release_year=2014';
    authentication: string = '&api_key=';

    constructor(private http: HttpClient) { }
    getPopular(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
        // .pipe()
    }

    getMoviesInTheaters(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.moviesInTheaters}${this.authentication}${apiKey}`);
    }

    getKidsMovies(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.kidsMovies}${this.authentication}${apiKey}`);
    }

    getDramaMovies(): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.bestDrama}${this.authentication}${apiKey}`);
    }

    getMovie(id): Observable<Object> {
        // return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d2351c8a8368576278b5f4791e8e167&language=en-US`);
        return this.http.get(`${this.path}movie/${id}?api_key=${apiKey}&language=en-US`);
    }

    findAMovie(name): Observable<Movies> {
        // findAFilm : string = 'https://api.themoviedb.org/3/search/movie?api_key=3d2351c8a8368576278b5f4791e8e167&query=Batman';
        const searchMovie = 'search/movie?api_key=';
        const queryString = `&query=${name}`;
        return this.http.get<Movies>(`${this.path}${searchMovie}${apiKey}${queryString}`);
    }
}
