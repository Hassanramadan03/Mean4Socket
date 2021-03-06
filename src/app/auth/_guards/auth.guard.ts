import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs/Rx";
import { AlertService } from "../_services/alert.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _authService: AuthenticationService, private _alert: AlertService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (state.url === 'login' && this._authService.isLoggedIn()) {
            this._router.navigate(['/']);
        }
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url: string): boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        }

        this._alert.error("Please login to access this page.")
        this._router.navigate(['login']);

        if (this._authService.isLoggedIn()) {
            return false;
        }
        return true;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     return this._userService.verify().map(
    //         data => {
    //             if (data !== null) {
    //                 // logged in so return true
    //                 return true;
    //             }
    //             // error when verify so redirect to login page with the return url
    //             this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //             return false;
    //         },
    //         error => {
    //             // error when verify so redirect to login page with the return url
    //             this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //             return false;
    //         });
    // }
}