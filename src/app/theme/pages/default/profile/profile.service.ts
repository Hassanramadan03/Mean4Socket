import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { ApiUrlService } from "../../../../shared/api-url.service";

@Injectable()
export class ProfileService {
    private options;


    constructor(private http: Http, private apiUrlService: ApiUrlService) {
        this.options = this.apiUrlService.options;

    }

    getProfile(id) {
        let url = this.apiUrlService.getApiUrl().ProfileOfCUser + `?id=${id}`;
        return this.http.get(url, this.options)
            .map((response: Response) => response.json());
    }

    getAllPosts() {
        let url = this.apiUrlService.getApiUrl().ccPosts;
        return this.http.get(url, this.options)
            .map((response: Response) => response.json());
    }

    editProfile(oUser) {
        let url = this.apiUrlService.getApiUrl().UpdateProfile;

        return this.http.put(url, oUser, this.options)
            .map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // private jwt() {
    //   // create authorization header with jwt token
    //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   if (currentUser && currentUser.token) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append({ 'Authorization': 'JWT ' + `${currentUser.token}`});
    //     return new RequestOptions({ headers: headers });
    //   }
    // }
}
