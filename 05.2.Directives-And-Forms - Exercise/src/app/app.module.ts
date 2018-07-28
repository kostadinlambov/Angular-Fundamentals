import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsRoutesModule } from './routes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { HomeComponent } from './home/home.component';

import { UsernameValidatorDirective } from './shared/directives/username-validator.directive';
import { PasswordValidatorDirective } from './shared/directives/password-validator.directive';
import { NamesValidatorDirective } from './shared/directives/names-validator.directive';
import { MatchPasswordValidatorDirective } from './shared/directives/matchPassword-validator.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthenticationService } from './authentication/authentication.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginAndRegisterGuard } from './shared/guards/loginAndRegister.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    UsernameValidatorDirective,
    PasswordValidatorDirective,
    NamesValidatorDirective,
    MatchPasswordValidatorDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsRoutesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    LoginAndRegisterGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
