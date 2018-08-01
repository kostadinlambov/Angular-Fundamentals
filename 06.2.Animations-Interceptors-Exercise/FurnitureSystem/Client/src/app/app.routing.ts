import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { LoginAndRegisterGuard } from './authentication/guards/loginAndRegisterGuard';
import { AllFurnitureComponent } from './furniture/all-furniture/all-furniture.component'
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './furniture/my-furniture/my-furniture.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent, canActivate: [LoginAndRegisterGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginAndRegisterGuard] },
  {
    path: 'furniture', children:
      [
        { path: 'all', component: AllFurnitureComponent },
        { path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard] },
        { path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard] },
        { path: 'my', component: MyFurnitureComponent, canActivate: [AuthGuard] },
      ]
  },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }