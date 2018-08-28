import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AuthenticationService } from "../../../auth/_services/authentication.service";
import { Router } from "@angular/router";

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    styleUrls: ["./header-nav.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    userDetails: any;

    constructor(private authService: AuthenticationService, private _router: Router) {

    }

    ngOnInit() {
        this.userDetails = this.authService.getCurentUser();
    }

    ngAfterViewInit() {
        mLayout.initHeader();
    }

    logOut() {
        this.authService.logout();
        console.log('log out');
        this._router.navigate(['login']);

    }
}