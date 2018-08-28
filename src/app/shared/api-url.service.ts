import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestOptionsArgs } from "@angular/http";

@Injectable()
export class ApiUrlService {
    private baseUrl = 'http://localhost:8080/genericMiddleware/';
    private serverUrl = 'http://41.39.63.112:3000/api/v1/';

    options;
    public authToken;

    constructor() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.authToken = currentUser.authToken;
            this.options = {
                'Content-Type': 'application/json',
                'X-Auth-Token': currentUser.authToken,
                'X-User-Id': currentUser.userId
            }

        }
        console.log(currentUser);



    }

    getApiUrl() {
        return {
            createChannel: this.serverUrl + `channels.create`,
            login: this.serverUrl + `login`,
            register: this.serverUrl + `users.register`,
            channelsList: this.serverUrl + 'channels.list',
            groupsList: this.serverUrl + 'groups.list',
            usersList: this.serverUrl + 'users.list',
            inviteUser: this.serverUrl + 'groups.invite',

            genericMethod: this.baseUrl + 'genericMethod',
            //unused now 
            ProfileOfCUser: this.baseUrl + `user/profile`,
            ccPosts: this.baseUrl + `contentcreator/posts`,
            toggleLike: this.baseUrl + `user/toggle_like`,
            getComments: this.baseUrl + `user/post_comments/`,
            postComment: this.baseUrl + `user/comment`,
            getProfileOfCC: this.baseUrl + `user/profile`,
            UpdateProfile: this.baseUrl + 'user/profile/edit',
            updateComment: this.baseUrl + 'user/edit_comment',
            getAllTiers: this.baseUrl + 'ContentCreator/tiers',
            allSups: this.baseUrl + 'user/subscriptions',
            postLikes: this.baseUrl + 'user/post_likes/',
            removePost: this.baseUrl + 'contentcreator/remove_post',
            editPost: this.baseUrl + 'contentcreator/edit_post'

        }
    }
}
