import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [
    { path: 'search', component: MoviesComponent },
    { path: 'movie/:id', component: MoviesDetailsComponent },
    { path: '', component: MoviesComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
