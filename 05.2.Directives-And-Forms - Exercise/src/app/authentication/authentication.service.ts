import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-form/login.model';
import { RegisterModel } from './register-form/register.model';
import { Observable } from 'rxjs';

const appKey = 'kid_ryaKoAwE7';
const appSecret = '218c5675532648babe97c768fd32c650';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

// let authtokenArr = [];

@Injectable()
export class AuthenticationService {
    private currentAuthtoken: string;
    // private authtokenArr: [string] = [''];
    constructor(private http: HttpClient) { }

    register(registerModel: RegisterModel): Observable<Object> {
        return this.http.post(
            registerUrl,
            registerModel,
            // JSON.stringify(registerModel),
            // {
            //     headers: this.createAuthHeaders('Basic')
            // }
        );
    }

    login(loginModel: LoginModel): Observable<Object> {
        return this.http.post(
            loginUrl,
            loginModel
            // JSON.stringify(loginModel),
            // {
            //     headers: this.createAuthHeaders('Basic')
            // }
        );
    }

    logout() {
        return this.http.post(logoutUrl,
            {}
            // {
            //     headers: this.createAuthHeaders('Kinvey')
            // }
        );
    }

    checkIfLoggedIn() {
        // debugger;
        // return authtokenArr.includes(localStorage.getItem('authtoken'));
        // return this.currentAuthtoken === localStorage.getItem('authtoken');
        return localStorage.getItem('authtoken') !== null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    // set authtoken(value: string) {
    //     this.authtokenArr.push(value);
    // }

    // private createAuthHeaders(type: string): HttpHeaders {
    //     if (type === 'Basic') {
    //         return new HttpHeaders({
    //             'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
    //             'Content-Type': 'application/json'
    //         });
    //     } else {
    //         return new HttpHeaders({
    //             'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
    //             'Content-Type': 'application/json'
    //         });
    //     }
    // }
}
