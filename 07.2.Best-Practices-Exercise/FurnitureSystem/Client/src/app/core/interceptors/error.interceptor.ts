import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    jwtToken: string = localStorage.getItem('authtoken');
    constructor(
        private toastrService: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(catchError((err: HttpErrorResponse) => {

                switch (err.status) {
                    case 401:
                        this.toastrService.error(err['error']['message'], 'Error!');
                        break;
                    case 400:
                        for (let e of Object.values(err.error.errors)) {
                            this.toastrService.error(e.toString(), 'Error!');
                        }
                        break;
                }
                return throwError(err)
            }))
    }
}