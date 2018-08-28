import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FeedService } from "./feed.service";

@Component({
    selector: '.m-grid__item.m-grid__item--fluid',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})



export class FeedComponent implements OnInit {
    kinds = [
        { value: 'c', viewValue: 'public' },
        { value: 'p', viewValue: 'private' },
    ];
    type = 'c';
    name = {};
    users = [];
    user: any;
    invitedUsers: any;

    usersList = [];
    channelsList = [];
    groupsList = [];
    constructor(private feedService: FeedService) {
        this.listChannels()
        this.listUsers()
        this.listGroups();

    }

    ngOnInit() {

    }
    createChannel() {
        console.log(this.user);
        let arrUsers = [];
        this.user.forEach(user => {
            arrUsers.push(user.name);
        });
        this.feedService.createChannel(this.name, this.type, arrUsers).subscribe(
            data => {
                this.listChannels()
                this.listGroups();

            })

    }
    listChannels() {
        this.feedService.listChannels().subscribe(channels => {
            this.channelsList = channels
        })
    }
    listGroups() {
        this.feedService.listGroups().subscribe(channels => {
            this.groupsList = channels

        })
    }
    listUsers() {
        this.feedService.listUsers().subscribe(result => {
            this.usersList = result.users;
            console.log(this.usersList);


        })
    }
    inviteUsers(roomId) {
        console.log(roomId);

        let arrUsers = [];
        this.user.forEach(user => {
            arrUsers.push(user._id);
        });
        var body = {
            roomId: roomId,
            userId: arrUsers[0]
        }
        console.log(body);

        this.feedService.inviteUsers(body).subscribe(result => {
            console.log(result);



        })
    }
}