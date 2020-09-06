import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        return this.http.post<User>('/api/login', { username, password });
        // this is just the HTTP call,
        // we still need to handle the reception of the token
        // .shareReplay();
    }
}