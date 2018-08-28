import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../_services/script-loader.service";
import { AuthenticationService } from "./_services/authentication.service";
import { AlertService } from "./_services/alert.service";
import { UserService } from "./_services/user.service";
import { AlertComponent } from "./_directives/alert.component";
import { LoginCustom } from "./_helpers/login-custom";
import { Helpers } from "../helpers";

@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './templates/login-2.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AuthComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    @ViewChild('alertSignin', { read: ViewContainerRef }) alertSignin: ViewContainerRef;
    @ViewChild('alertSignup', { read: ViewContainerRef }) alertSignup: ViewContainerRef;
    @ViewChild('alertForgotPass', { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;

    constructor(private _router: Router,
        private _script: ScriptLoaderService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _alertService: AlertService,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        // this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);

        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(false);
                LoginCustom.init();
            });
    }

    signin() {

        console.log('logging in');
        this.loading = true;


        this._authService.login(this.model)
            .subscribe(
            data => {
                console.log(data);
                if (data.status === 'success') {

                    this._router.navigate(['/feed']);
                    // this._router.navigate([this.returnUrl]);
                }
                else {
                    this.model = {};
                    this.showAlert('alertSignin');
                    this._alertService.error("Maybe You Forget Email Or Password..!");
                    this.loading = false;
                }
            },
            error => {
                this.model = {};
                this.showAlert('alertSignin');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    signup() {
        this.loading = true;
        this._userService.register({ username: this.model.username, pass: this.model.pass, name: this.model.name, email: this.model.email })
            .subscribe(
            data => {
                console.log(data);

                if (data.success) {
                    this.showAlert('alertSignin');
                    this._alertService.success('Thank you. To complete your registration please check your email.', true);
                    this.loading = false;
                    LoginCustom.displaySignInForm();
                    this.model = {};
                    this._router.navigate(['/feed']);

                } else if (data.msg2) {
                    let Err = '';
                    let errArr = [];
                    for (let i = 0; i < data.msg2.length; i++) {
                        Err += data.msg2[i].msg + '\n';

                    }
                    this.model = {};
                    this.showAlert('alertSignup');
                    this._alertService.error(Err);
                    this.loading = false;
                }
                else {
                    this.model = {};
                    this.showAlert('alertSignup');
                    this._alertService.error("This Email or Username Is Already Existed..!");
                    this.loading = false;
                }
            },
            error => {
                this.showAlert('alertSignup');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    forgotPass() {
        this.loading = true;
        this._userService.forgotPassword(this.model.email)
            .subscribe(
            data => {
                this.showAlert('alertSignin');
                this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
                this.loading = false;
                LoginCustom.displaySignInForm();
                this.model = {};
            },
            error => {
                this.showAlert('alertForgotPass');
                this._alertService.error(error);
                this.loading = false;
            });
    }

    showAlert(target) {
        this[target].clear();
        let factory = this.cfr.resolveComponentFactory(AlertComponent);
        let ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}