import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AuthenticationService } from "../../../auth/_services/authentication.service";
// import {Helpers} from '../../../helpers';
import * as io from 'socket.io-client';
declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    styleUrls: ['./aside-nav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    userDetails: any;
    socket;
    numberOfOnlineUsers: number;
    constructor(private authService: AuthenticationService) {
        this.socket = io();
    }

    ngOnInit() {
        this.userDetails = this.authService.getCurentUser();
        this.socket.on('numberOfOnlineUsers', (numberOfOnlineUsers) => {
            this.numberOfOnlineUsers = numberOfOnlineUsers;
            console.log(this.numberOfOnlineUsers);

        });
    }

    ngAfterViewInit() {

        mLayout.initAside();
        let menu = mLayout.getAsideMenu();
        let item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        (<any>$(menu).data('menu')).setActiveItem(item);
    }
    getNotification() {

    }
}