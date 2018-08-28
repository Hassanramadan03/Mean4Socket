import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { ApiUrlService } from "../../../../shared/api-url.service";

@Injectable()
export class FeedService {
    httpOptions: {};
    constructor(
        private http: Http,
        private apiUrlService: ApiUrlService,


    ) {

        this.httpOptions = apiUrlService.getApiUrl().genericMethod;
    }


    createChannel(Channel, t, members) {
        Channel.members = members;

        var nChannel = {
            headers: this.apiUrlService.options,
            behavior: "POST",
            url: this.apiUrlService.getApiUrl().createChannel,
            body: Channel
        };



        return this.http.post(this.apiUrlService.getApiUrl().genericMethod + `/${t}`, nChannel)
            .map((response: Response) => {

                return response.json();
            });
    }
    listChannels() {
        const body = {
            url: this.apiUrlService.getApiUrl().channelsList,
            behavior: "GET",
            headers: this.apiUrlService.options
        }
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, body)
            .map((response: Response) => {
                return response.json().channels
                    ;
            });
    }
    listGroups() {
        const body = {
            url: this.apiUrlService.getApiUrl().groupsList,
            behavior: "GET",
            headers: this.apiUrlService.options
        }
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, body)
            .map((response: Response) => {


                return response.json().groups;
            });
    }
    listUsers() {
        const body = {
            url: this.apiUrlService.getApiUrl().usersList,
            behavior: "GET",
            headers: this.apiUrlService.options
        }
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, body)
            .map((response: Response) => {
                return response.json();
            });
    }
    inviteUsers(users) {
        const body = {
            url: this.apiUrlService.getApiUrl().inviteUser,
            behavior: "POST",
            headers: this.apiUrlService.options,
            body: users
        }
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, body)
            .map((response: Response) => {
                return response.json();
            });
    }
}