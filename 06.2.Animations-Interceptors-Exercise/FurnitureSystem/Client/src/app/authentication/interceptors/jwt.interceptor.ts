import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    jwtToken: string = localStorage.getItem('authtoken');
    constructor(
        private router: Router,
        private toastrService: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser && currentUser.token) {
            console.log('jwtToken:', currentUser.token);

            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentUser.token}`,
                },
            });
        }

        return next.handle(request)
            .pipe(tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.body.token && request.url.endsWith('login')) {
                        console.log('login: ', event); ''
                        this.saveToken(event['body']);
                        this.router.navigate(['/furniture/all']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.endsWith('signup')) {
                        console.log('register: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/signin']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.endsWith('create')) {
                        console.log('create Furniture: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/furniture/all']);
                    }
                }));
    }

    saveToken(data) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: data['user']['name'],
            token: data['token']
        },
            null,
            4));
        this.toastrService.success(data['message']);
        this.router.navigate(['/home']);
    }
}