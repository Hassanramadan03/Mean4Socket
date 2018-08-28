import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthenticationService } from "../../../auth/_services/authentication.service";


@Component({
    selector: "app-quick-sidebar",
    templateUrl: "./quick-sidebar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class QuickSidebarComponent implements OnInit {
    userDetails: any;

    constructor(private authService: AuthenticationService) {

    }

    ngOnInit() {
        this.userDetails = this.authService.getCurentUser();
    }

}