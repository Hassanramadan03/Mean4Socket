import { Injectable, ReflectiveInjector } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { ApiUrlService } from "../../shared/api-url.service";
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
// import { User } from "../_models/index";

@Injectable()
export class UserService {
    registerUrl;
    myService;
    constructor(private http: Http, private apiUrlService: ApiUrlService) {
        this.registerUrl = apiUrlService.getApiUrl().register;
    }

    verify() {
        // return this.http.get('/api/verify', this.jwt()).map((response: Response) => response.json());
    }

    forgotPassword(email: string) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email }), this.jwt()).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    register(User) {
        var oUser = {
            body: User,
            url: this.apiUrlService.getApiUrl().register,
            headers: { 'Content-Type': 'application/json' },
            behavior: 'POST'
        };

        if (oUser.headers)
            return this.http.post(this.apiUrlService.getApiUrl().genericMethod, oUser)
                .map((response: Response) => response.json()).catch(error => Observable.throw(error));
    }

    update(user: any) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}