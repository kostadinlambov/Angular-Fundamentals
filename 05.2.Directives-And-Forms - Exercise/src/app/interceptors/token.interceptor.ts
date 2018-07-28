import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const appKey = 'kid_ryaKoAwE7';
const appSecret = '218c5675532648babe97c768fd32c650';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                },
            });
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                },
            });
        }

        return next.handle(request)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && request.url.endsWith('login')) {
                    this.toastrService.success('You have successfully logged in!');
                    this.successfulLoginAndRegister(event['body']);
                } else if (event instanceof HttpResponse && request.url.endsWith(appKey)) {
                    this.toastrService.success('You have registered successfully!');
                    this.successfulLoginAndRegister(event['body']);
                } else if (event instanceof HttpResponse && request.url.endsWith('_logout')) {
                  this.logOut();
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            this.toastrService.error(err['error']['description']);
                            this.router.navigate(['/login']);
                            break;
                        case 404:
                            this.toastrService.error(err['error']['description']);
                            this.router.navigate(['/page-not-found']);
                            break;
                        case 500:
                            this.toastrService.error(err['error']['description']);
                            this.router.navigate(['/server-error']);
                            break;
                    }
                }
            }));
    }

    logOut() {
        localStorage.clear();
        // this.authService.authtoken = '';
        this.toastrService.info('You have been successfully logged out!');
        this.router.navigate(['/login']);
    }

    successfulLoginAndRegister(data) {
        this.authService.authtoken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        this.router.navigate(['/home']);
    }
}
