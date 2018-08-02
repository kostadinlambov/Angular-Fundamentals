import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FurnitureModule } from './components/furniture/furniture.module';
import { CustomFormsModule } from 'ng5-validation';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// import { JwtInterceptor } from './authentication/interceptors/jwt.interceptor';
// import { ErrorInterceptor } from './authentication/interceptors/error.interceptor';

// import { AuthGuard } from './authentication/guards/auth.guard';
// import { LoginAndRegisterGuard } from './authentication/guards/loginAndRegisterGuard';
import { AuthModule } from './authentication/auth.module';
import { CoreModule } from './core/core.module';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    FurnitureModule,
    CustomFormsModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
