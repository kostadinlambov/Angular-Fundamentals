import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureModule } from './components/furniture/furniture.module';

// Components
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';

// Guards
import { LoginAndRegisterGuard } from './core/guards/loginAndRegisterGuard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent, canActivate: [LoginAndRegisterGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginAndRegisterGuard] },
  { path: 'furniture', loadChildren: () => FurnitureModule },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }