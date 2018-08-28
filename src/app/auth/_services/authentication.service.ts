import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { ApiUrlService } from "../../shared/api-url.service";

@Injectable()
export class AuthenticationService {
    currentUser: any;
    loginUrl;
    httpOptions: {};
    constructor(
        private http: Http,
        private apiUrlService: ApiUrlService,


    ) {

        this.loginUrl = apiUrlService.getApiUrl().login;
    }
    getCurentUser() {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            return JSON.parse(localStorage.getItem('currentUser')).user;

        }
    }

    isLoggedIn(): boolean {
        try {
            const theUser: any = JSON.parse(localStorage.getItem('currentUser'));
            if (theUser) {
                this.currentUser = theUser;
            }
        } catch (error) {
            return false;
        }
        return !!this.currentUser;
    }

    login(User) {
        var oUser = {
            body: User,
            url: this.apiUrlService.getApiUrl().login,
            headers: { 'Content-Type': 'application/json' },
            behavior: 'POST'
        };
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, oUser)
            .map((response: Response) => {
                console.log(response.json());
                if (response.json().status === "success") {
                    localStorage.setItem('currentUser', JSON.stringify(response.json().data));
                }
                return response.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}